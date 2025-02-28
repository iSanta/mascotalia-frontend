import React, { useState } from "react";
import Style from "./Detail.module.scss";
import DetailInfo from "@/Presentation/components/Detail/DetailInfo";
import Gallery from "@/Presentation/components/Detail/Gallery";
import {
  Flex,
  Row,
  Col,
  Typography,
  Button,
  Divider,
  UpOutlined,
  DownOutlined,
} from "@/Presentation/design-system";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Pet } from "@/Domain/pet/detail/Pet";
import useMessage from "@/Application/user-communication/usePhoneMessage";
import { whatsappMessageChannel } from "@/Application/user-communication/whatsappMessageChannel";
import useTranslate from "@/Application/translate/useTranslate";

const Detail = ({ petDetail }: { petDetail: Pet }) => {
  const [expanded, setExpanded] = useState(false);
  const { sendByUrl } = useMessage(whatsappMessageChannel);
  const { t } = useTranslate();

  return (
    <Row gutter={[24, 24]}>
      <Col span={24} md={12}>
        <DetailInfo
          name={petDetail.ownerName}
          imageSrc={petDetail.foundationLogo}
          foundationId={petDetail.foundationId}
          specie={petDetail.specie}
          city={petDetail.location}
          className={Style.detailInfoMobile}
        />
        <Gallery
          pet={{
            id: petDetail.id,
            age: petDetail.age,
            imageUrl: petDetail.petImages[0].url,
            specie: petDetail.specie
          }}
          urls={petDetail.petImages.map((image) => image.url)} />
      </Col>

      <Col span={24} md={12}>
        <Flex vertical gap={24}>
          <DetailInfo
            foundationId={petDetail.foundationId}
            name={petDetail.ownerName}
            imageSrc={petDetail.foundationLogo}
            specie={petDetail.specie}
            city={petDetail.location}
            className={Style.detailInfoDesktop} />

          <Flex justify="space-between" gap={8} align="center">
            <Button
              href={sendByUrl(
                petDetail.contactPhone,
                `¡Hola! estoy interesado en la mascota:\n\n${process.env.NEXT_PUBLIC_MASCOTALIA
                }adopt/detail/${petDetail.specie.toLowerCase()}/${petDetail.id
                }\n\ncon el identificador: ${petDetail.identifier
                }.\nMe podrías dar más información por favor 🐶🐱`
              )}
              target="_blank"
              type="primary"
              size="large"
              buttontype="gradient"
            >
              <strong style={{ color: "var(--color-bg)" }}>Quiero adoptarlo</strong>
            </Button>
            <Flex gap={16}>
              <Button type="text" size="small" shape="circle" onClick={() => { }}>
                <FaFacebook size="2.2rem" />
              </Button>
              <Button type="text" size="small" shape="circle" onClick={() => { }}>
                <FaSquareXTwitter size="2.2rem" />
              </Button>
              <Button type="text" size="small" shape="circle" onClick={() => { }}>
                <FaInstagram size="2.2rem" />
              </Button>
            </Flex>
          </Flex>
          <Typography.Paragraph
            className="petDescription"
            ellipsis={{
              rows: 5,
              expandable: "collapsible",
              expanded,
              onExpand(_, info) {
                setExpanded(info.expanded);
              },
              symbol: (
                <span onClick={() => setExpanded(!expanded)} className="expand-btn">
                  {expanded ? (
                    <>
                      <UpOutlined />
                      <Typography.Text> Ver menos </Typography.Text>
                    </>
                  ) : (
                    <>
                      <DownOutlined />
                      <Typography.Text> Ver más </Typography.Text>
                    </>
                  )}
                </span>
              ),
            }}
          >
            {petDetail.description}
          </Typography.Paragraph>

          <Flex vertical>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Identificador</Typography.Paragraph>
              <Typography.Text type="secondary">{petDetail.identifier}</Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Edad</Typography.Paragraph>
              <Typography.Text type="secondary">
                {petDetail.age} {petDetail.age > 1 ? "años" : "año"}
              </Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Peso</Typography.Paragraph>
              <Typography.Text type="secondary">{petDetail.weight} kg</Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Tamaño</Typography.Paragraph>
              <Typography.Text type="secondary">{t(petDetail.size)}</Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Género</Typography.Paragraph>
              <Typography.Text type="secondary">{t(petDetail.sex)}</Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Raza</Typography.Paragraph>
              <Typography.Text type="secondary">{t(petDetail.specie)}</Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph strong>
                <Flex align="center">Vacunado</Flex>
              </Typography.Paragraph>
              <Typography.Text type="secondary">
                {petDetail.vaccinated ? "Si" : "No"}
              </Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Desparasitado</Typography.Paragraph>
              <Typography.Text type="secondary">{petDetail.dewormed ? "Si" : "No"}</Typography.Text>
            </Flex>
            <Divider className={Style.detailDivider} />
            <Flex justify="space-between">
              <Typography.Paragraph>Esterilizado</Typography.Paragraph>
              <Typography.Text type="secondary">{petDetail.sterilized ? "Si" : "No"}</Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default Detail;
