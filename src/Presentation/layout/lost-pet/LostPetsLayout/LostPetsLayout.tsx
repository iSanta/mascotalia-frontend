'use client';
import { useEffect, useMemo, useState } from "react";
import useLocation from "@/Application/geo-location/useLocation";
import useLostPet from "@/Application/lost-pet/useLostPet";
import Style from "./LostPetsLayout.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Button, Col, Flex, Pagination, Row, Typography } from "@/Presentation/design-system";
import CatalogFilter from "@/Presentation/components/CatalogFilter";
import useFoundation from "@/Application/foundation/useFoundation";
import { queryParamsToObject } from "@/Application/utils/queryParamsToObject";
import useQueryParams from "@/Application/query-params/useQueryParams";
import { LostPetFilters } from "@/Domain/lost-pet/LostPetFilters";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Sex } from "@/Domain/pet/sex/Sex";
import { Specie } from "@/Domain/pet/specie/Specie";
import { City } from "@/Domain/city/City";
import useSex from "@/Application/sex/useSex";
import useSpecies from "@/Application/specie/useSpecies";
import useCity from "@/Application/city/useCity";
import useAuth from "@/Application/auth/useAuth";
import CreateLostPetModal from "@/Presentation/components/LostPet/CreateLostPetModal/CreateLostPetModal";
import CatalogCard from "@/Presentation/components/CatalogCard";
import useFilters from "@/Application/filters/useFilters";

type LostPetsLayoutProps = {
    sexes: CommonResponse<Sex[]>;
    species: CommonResponse<Specie[]>;
    cities: CommonResponse<City[]>;
};

const LostPetsLayout = ({ sexes, species, cities }: LostPetsLayoutProps) => {
    const { lostPetsCall, getLostPets } = useLostPet();
    const { userCity } = useLocation({ async: true });
    const { getfoundationsByCity } = useFoundation();
    const { getParams } = useQueryParams();
    const { saveSex } = useSex();
    const { saveSpecies } = useSpecies();
    const { setCities } = useCity();
    const { userHasRole } = useAuth();
    const [showModal, setShowModal] = useState<boolean>(false)
    const { getStoreFilters } = useFilters();
    const lostPets = useMemo(() => getLostPets(), [getLostPets()]);

    useEffect(() => {
        saveSex(sexes);
        saveSpecies(species);
        setCities(cities?.value);
    }, []);

    useEffect(() => {
        if (userCity === null) return;

        getfoundationsByCity(userCity);

        const params = queryParamsToObject(getParams());

        if (Object.entries(params).length) {
            lostPetsCall({ ...params as LostPetFilters, city: userCity });
            return;
        }

        lostPetsCall({ city: userCity, })
    }, [userCity]);

    useEffect(() => {
        const filters = getStoreFilters();
        if (Object.keys(filters).length === 0) return;
        lostPetsCall(filters as LostPetFilters);
    }, [getStoreFilters()]);

    return (
        <section className={`${Utils.section} ${Style.wrapper}`}>
            <CreateLostPetModal showModal={showModal} setShowModal={setShowModal} />

            {userHasRole(["Foundation", "Owner"]) && <Row gutter={[24, 24]} justify="end">
                <Col>
                    <Button onClick={() => setShowModal(true)} type="primary">Registrar animal perdido</Button>
                </Col>
            </Row>}
            <Row gutter={[24, 24]}>
                <Col span={6} className={Style.filters}>
                    <CatalogFilter callOnReset={lostPetsCall} showFilterByAge={false} showFilterBySex={false} />
                </Col>
                <Col span={24} md={18} className={Style.results}>

                    <Flex align="center" justify="space-between">
                        <Typography.Text type="secondary">
                            Mostrando {lostPets.value.items.length} de{" "}
                            {lostPets.value.totalCount} resultados
                        </Typography.Text>

                        {/* <Button onClick={showDrawer} type="text" shape="circle" className={Style.filtersButton}>
                            <BiFilterAlt size={20} />
                        </Button>

                        <Drawer title="Filtros" onClose={onClose} open={open}>
                            <CatalogFilter />
                        </Drawer> */}
                    </Flex>
                    <Row gutter={[24, 24]}>
                        {
                            lostPets.value.items.map(lostPet =>
                            (
                                <Col key={lostPet.id} span={24} sm={12} lg={8}>
                                    <CatalogCard key={lostPet.id} id={lostPet.id} specie={lostPet.specie} sex={lostPet.sex} age={lostPet.age} weight={lostPet.weight} imageSrc={lostPet.petImages.url} />
                                </Col>
                            ))
                        }
                    </Row>
                    <Flex justify="center">
                        <Pagination
                            onChange={async (e) => lostPetsCall({ page: e.toString(), city: userCity })}
                            maxPages={lostPets.value.totalPages}
                        />
                    </Flex>
                </Col>
            </Row>
        </section>
    )
}

export default LostPetsLayout