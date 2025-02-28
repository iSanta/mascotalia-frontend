"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import CampaignImg from "../../../../../public/images/CampaingImg.svg"
import { Campaign } from "@/Domain/campaign/Campaign";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import {
  Breadcrumb,
  Col,
  Flex,
  Pagination,
  Row,
  Typography,
  Button,
} from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import Style from "./CampaignSystemLayout.module.scss";
import Banner from "@/Presentation/components/Banner";
import VolunteeringCard from "@/Presentation/components/VolunteeringCard";

const CampaignSystemLayout = ({ recentCampaigns }: { recentCampaigns: Campaign[] }) => {

  const mappedRecentCampaigns = recentCampaigns?.map((campaign) => ({
    id: campaign.id,
    title: campaign.title,
    image: campaign.imageUrl,
    description: campaign.description,
    foundation: campaign.location,
    volunteers: campaign.maxVolunteers,
    date: campaign.startDate,
  }));

  return (
    <div>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Volunteering",
            href: "/volunteering",
          },
        ]}
      />
      <Row gutter={0} align={"middle"} style={{ marginTop: "3em" }}>
        <Col xl={12} md={12} className={Style.imgContainer}>
          <div className={Style.imagenIntroContainer}>
            <Image
              src={CampaignImg}
              width={100}
              height={150}
              alt={""}
              className={Style.imageIntro}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </Col>
        <Col xl={12} md={12} style={{ padding: '5em' }}>
          <Row>
            <Typography.Paragraph style={{ padding: "1.5em", paddingLeft: "0" }} className={Utils.text_bold_lg}>
              Sistema de voluntariado
            </Typography.Paragraph>
            <Typography.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consequatur
              eligendi iste debitis provident! Sed magnam vel corporis illo. Debitis distinctio
              incidunt iste eum necessitatibus repudiandae magnam, dolor nostrum minus?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consequatur
              eligendi iste debitis provident! Sed magnam vel corporis illo. Debitis distinctio
              incidunt iste eum necessitatibus repudiandae magnam, dolor nostrum minus?
            </Typography.Text>
            <Button type="primary" size="middle" style={{ marginTop: "1.5em" }}>
              <span>Ver campañas de voluntariado</span>
            </Button>
          </Row>
        </Col>
      </Row>
      <Banner
        title="¿CÓMO PODEMOS AYUDAR?"
        description="Amar, proteger y velar por el bienestar de aquellos que no tienen una voz."
      />
      {recentCampaigns && (
        <div style={{ margin: "4em" }}>
          <Row style={{ marginBottom: "1.5em" }}>
            <Typography.Paragraph className={Utils.text_bold_lg}>
              <h2>Campañas de voluntariado recientes</h2>
            </Typography.Paragraph>
            <Typography.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consequatur
              eligendi iste debitis provident! Sed magnam vel corporis illo. Debitis distinctio
              incidunt iste eum necessitatibus repudiandae magnam, dolor nostrum minus?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consequatur
              eligendi iste debitis provident! Sed magnam vel corporis illo. Debitis distinctio
              incidunt iste eum necessitatibus repudiandae magnam, dolor nostrum minus?
            </Typography.Text>
          </Row>
          <Row>
            {mappedRecentCampaigns?.map((campaign) => (
              <Col key={campaign.id} xl={12}>
                <VolunteeringCard
                  title={campaign.title}
                  description={campaign.description}
                  foundation={campaign.foundation}
                  date={campaign.date}
                  associatedPets={70}
                  volunteers={campaign.volunteers}
                />
              </Col>
            ))}
          </Row>
          <Flex align="center" justify="center">
            <Button type="primary" size="large" style={{ marginTop: "1.5em" }}>
              <span>Ver todas las campañas</span>
            </Button>
          </Flex>
        </div>
      )}
    </div>

  );
};

export default CampaignSystemLayout;
