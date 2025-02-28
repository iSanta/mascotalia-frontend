"use client";
import React, { useEffect } from "react";
import { Campaign } from "@/Domain/campaign/Campaign";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import {
  Breadcrumb,
  Col,
  Flex,
  Pagination,
  Row,
} from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import Style from "./CampaignLayout.module.scss";
import InputSearch from "@/Presentation/components/common/InputSearch";
import Entries from "@/Presentation/components/Blog/Entries";
import CampaignEntries from "@/Presentation/components/Campaign/CampaingEntries/CampaignEntries"
import useCampaign from "@/Application/campaign/useCampaign";
import LoadingSpinner from "@/Presentation/components/common/LoadingSpinner";

type CampaignLayoutProps = {
  campaigns: PaginatedResponse<Campaign[]>;
  recentCampaigns: Campaign[];
  randomCampaigns: Campaign[];
};

const CampaignLayout = ({ campaigns, recentCampaigns, randomCampaigns }: CampaignLayoutProps) => {

  const { setCampaigns, callCampaigns } = useCampaign();

  useEffect(() => {
    setCampaigns(campaigns);
  }, [])

  const mappedRecentCampaigns = recentCampaigns?.map((campaign) => ({
    id: campaign.id,
    title: campaign.title,
    image: campaign.imageUrl,
    createdAt: campaign.startDate,
  }));

  const mappedRandomCampaigns = randomCampaigns?.map((campaign) => ({
    id: campaign.id,
    title: campaign.title,
    image: campaign.imageUrl,
    createdAt: campaign.startDate,
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
            <CampaignEntries />
          </main>
        </Col>
        <Col xl={6} md={8}>
          <Row gutter={16} className={Style.searchBar}>
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
      <Flex align="center" justify="center">
        <Pagination
          onChange={async (e) => {
            callCampaigns({ page: e.toString() })
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          maxPages={campaigns.value.totalPages}
        />
      </Flex>
    </section>
  );
};

export default CampaignLayout;