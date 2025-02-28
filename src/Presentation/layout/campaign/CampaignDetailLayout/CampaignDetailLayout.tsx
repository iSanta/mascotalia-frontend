"use client";
import Image from "next/image";
import { Campaign } from "@/Domain/campaign/Campaign";
import {
  Breadcrumb,
  Col,
  Row,
  Typography,
  Divider,
} from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import Style from "./CampaingDetailLayout.module.scss";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import useDate from "@/Application/date/useDate";
import InputSearch from "@/Presentation/components/common/InputSearch";
import Entries from "@/Presentation/components/Blog/Entries";
import CampaignRegistrationForm from "../CampaignRegistrationForm";

type CampaignLayoutProps = {
  recentCampaigns: Campaign[];
  randomCampaigns: Campaign[];
  campaign: Campaign;
};

const CampaignDetailLayout = ({ recentCampaigns, randomCampaigns, campaign }: CampaignLayoutProps) => {
  const { shortDateFormat } = useDate();

  const mappedRecentCampaigns = recentCampaigns?.map((campaigns) => ({
    id: campaigns.id,
    title: campaigns.title,
    image: campaigns.imageUrl,
    createdAt: campaigns.startDate,
  }));

  const mappedRandomCampaigns = randomCampaigns?.map((campaigns) => ({
    id: campaigns.id,
    title: campaigns.title,
    image: campaigns.imageUrl,
    createdAt: campaigns.startDate,
  }));


  return (
    <section className={Utils.section}>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Campaign",
            href: "/campaign",
          },
        ]}
      />

      <Row gutter={[64, 24]}>
        <Col flex="auto" xl={18} md={16}>
          <main className={Style.blogEntry}>
            <div className={Style.blogEntry}>
              <Typography.Title style={{ marginTop: "0.3em" }}>{campaign.title}</Typography.Title>
              <Image
                priority
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${campaign.imageUrl}`}
                width={950}
                height={400}
                alt="Blog entry image"
                className={Style.image}
                style={{
                  width: "100%",
                  height: "auto"
                }}
              />
              <Row align="middle">
                <Col span={24}>
                  <Typography.Paragraph><h4 style={{ marginTop: "0em" }}>{campaign.location}</h4></Typography.Paragraph>
                  <div style={{ marginTop: "0.5em" }}>
                    <Typography.Paragraph>
                      <IoCalendarOutline /> {shortDateFormat(campaign.startDate)} - {shortDateFormat(campaign.endDate)}  /{" "}
                      <HiOutlineUserGroup style={{ verticalAlign: "middle" }} /> {campaign.maxVolunteers}
                    </Typography.Paragraph>
                  </div>
                </Col>
              </Row>
              <Divider />
            </div>
            <Row>
              <Typography.Paragraph>
                {campaign.description}
              </Typography.Paragraph>
            </Row>
            <Row>
              <CampaignRegistrationForm campaignId={campaign.id} />
            </Row>
          </main>
        </Col>
        <Col xl={6} md={8}>
          <Row gutter={16}>
            <InputSearch
              onEmpty={() => {
              }}
              onSubmit={() => {
              }}
            />
            {recentCampaigns && (
              <div style={{ marginTop: "2em", width: "100%" }}>
                <Entries
                  title={"Entradas Recientes"}
                  entries={mappedRecentCampaigns}
                  url={(entry) => {
                    return `/campaign/${entry.id}/title/${entry.title.toLowerCase().replace(/\s/g, "-")}`;
                  }}
                />
              </div>
            )}
            {/* {tags && (
              <Card style={{ marginTop: "2em" }}>
                <LabelSearch tags={tags} />
              </Card>
            )} */}
            {randomCampaigns && (
              <div style={{ marginTop: "2em" }}>
                <Entries
                  title={"Quizás te pueda interesar"}
                  entries={mappedRandomCampaigns}
                  url={(entry) => {
                    return `/campaign/${entry.id}/title/${entry.title.toLowerCase().replace(/\s/g, "-")}`;
                  }}
                />
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default CampaignDetailLayout;
