"use client";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { BiFilterAlt } from "react-icons/bi";
import Style from "./CatalogSection.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import {
  Flex,
  Col,
  Row,
  Typography,
  Button,
  Drawer,
  Pagination,
  Skeleton,
} from "@/Presentation/design-system";
import CatalogCard from "@/Presentation/components/CatalogCard";
import CatalogFilter from "@/Presentation/components/CatalogFilter";
import usePet from "@/Application/pet/usePet";
import useLocation from "@/Application/geo-location/useLocation";
import useFilters from "@/Application/filters/useFilters";
import { PetFilters } from "@/Domain/pet/PetFilters";
import useWebSockets from "@/Application/web-sockets/useWebSockets";
import useNotification from "@/Application/utils/useNotification";
import useTranslate from "@/Application/translate/useTranslate";
import { PetNotificationEvents } from "@/Domain/pet/events/PetNotificationEvents";
import { OrderingType } from "@/Domain/common/Ordering";
import { FaGift } from "react-icons/fa6";
import useWebDb from "@/Infrastructure/web-db/useWebDb";
import { IDBStore } from "@/Infrastructure/web-db/IDBStore";

const CatalogSection = () => {
  const { getStorePets, getPaginatedPets, getRandomPet } = usePet();
  const [open, setOpen] = useState(false);
  const { userCity } = useLocation({ async: true });
  const { getStoreFilters } = useFilters();
  const { message } = useWebSockets(`${process.env.NEXT_PUBLIC_URL}hub/notificationHub`, ["PetCreated"]);
  const { context, showNotification } = useNotification({ duration: 8 });
  const { setFilters } = useFilters();
  const { t } = useTranslate();
  useWebDb(IDBStore.PetLike);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const petsMemo = useMemo(() => getStorePets(), [getStorePets()]);

  // Actualización del objeto que contiene los filtros en redux
  // y petición al back con los filtros
  useEffect(() => {
    const filters = getStoreFilters();
    if (Object.keys(filters).length === 0) return;
    getPaginatedPets(filters as PetFilters);
  }, [getStoreFilters()]);

  useEffect(() => {
    if (!message()) return;

    if (message().eventIdentifier === PetNotificationEvents.NewPets) {
      showNotification("success", "", t(message().eventIdentifier),
        <Button
          type="primary"
          onClick={() => setFilters({ param: "ordering", value: { property: "createdAt", type: OrderingType.Descending } })}>
          {t("¡I want to  see them!")}
        </Button>
      );
    }
  }, [message()])

  const [isVisible, setIsVisible] = useState(true)
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  });

  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  });
  const filtersWrapperClass = `${Style.filtersWrapper} ${!isVisible && scrollPos >= 600 ? Style.visible : ''}`;

  return (
    <section className={`${Utils.section} ${Style.wrapper}`}>
      {context}
      <Row gutter={[24, 24]}>
        <Col span={7} className={Style.filters}>
          <CatalogFilter callOnReset={getPaginatedPets} />
        </Col>

        <Col span={24} md={17} className={Style.results}>

          <div className={filtersWrapperClass}>
            <Flex className={Style.filtersM} align="center" justify="center" gap={16}>
              <Typography.Text type="secondary">
                Mostrando {petsMemo.pagination.value.items.length} de{" "}
                {petsMemo.pagination.value.totalCount} resultados
              </Typography.Text>

              <Button type="primary" onClickCapture={() => getRandomPet()}>
                <FaGift size={20} />
                <b className={Style.textBtn}> ¡Mascota Sorpresa!</b>
              </Button>

              <Button onClick={showDrawer} type="text" shape="circle" className={Style.filtersButton}>
                <BiFilterAlt size={20} />
              </Button>

              <Drawer title="Filtros" onClose={onClose} open={open}>
                <CatalogFilter callOnReset={getPaginatedPets} />
              </Drawer>
            </Flex>
          </div>

          <div ref={elementRef}>
            <Flex align="center" justify="space-between" gap={4}>
              <Typography.Text type="secondary">
                Mostrando {petsMemo.pagination.value.items.length} de{" "}
                {petsMemo.pagination.value.totalCount} resultados
              </Typography.Text>

              <Button type="primary" onClickCapture={() => getRandomPet()}>
                <FaGift size={20} />
                <b className={Style.textBtn}> ¡Mascota Sorpresa!</b>
              </Button>

              <Button onClick={showDrawer} type="text" shape="circle" className={Style.filtersButton}>
                <BiFilterAlt size={20} />
              </Button>

              <Drawer title="Filtros" onClose={onClose} open={open}>
                <CatalogFilter callOnReset={getPaginatedPets} />
              </Drawer>
            </Flex>
          </div>

          <Row gutter={[24, 24]}>

            <Skeleton loading={petsMemo.status === "idle" || petsMemo.status === "loading"} active>
              {petsMemo.status === "succeeded" && petsMemo.pagination.value?.items.length ? (
                petsMemo.pagination.value?.items.map((pet) => (
                  <Col key={pet.id} span={24} sm={12} lg={8}>
                    <CatalogCard
                      id={pet.id}
                      specie={pet.specie}
                      sex={pet.sex}
                      age={pet.age}
                      weight={pet.weight}
                      imageSrc={pet.petImages.url}
                    />
                  </Col>
                ))
              ) : (
                <Col span={24}>
                  <Flex justify="center" align="center" style={{ marginTop: 'var(--spacing-XXL)' }}>
                    <Typography.Title level={5}>
                      No se encontraron resultados, por favor modifique los filtros de búsqueda
                    </Typography.Title>
                  </Flex>
                </Col>
              )}
            </Skeleton>


          </Row>
          <Flex justify="center">
            <Pagination
              onChange={async (e) => {
                getPaginatedPets({ page: e.toString(), city: userCity });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              maxPages={petsMemo.pagination.value.totalPages}            
            />
          </Flex>
        </Col>
      </Row>
    </section>
  );
};

export default CatalogSection;
