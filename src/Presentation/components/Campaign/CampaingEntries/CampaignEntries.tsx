import React, { useMemo } from "react";
import Image from "next/image";
import Style from "./CampaignEntries.module.scss";
import { IoCalendarOutline } from "react-icons/io5";
import { Button, Col, Divider, Row, Typography } from "@/Presentation/design-system";
import { LuSend } from "react-icons/lu";
import { FaPaw } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import useDate from "@/Application/date/useDate";
import Link from "next/link";
import useCampaign from "@/Application/campaign/useCampaign";
import LoadingSpinner from "@/Presentation/components/common/LoadingSpinner";

const CampaignEntries = () => {
  const { shortDateFormat } = useDate();
  const { getCampaigns } = useCampaign();

  const campaigns = useMemo(() => getCampaigns(), [getCampaigns()]);

  return (
    <>
      <LoadingSpinner loading={campaigns.status === "loading"} />
      {
        campaigns.pagination.value.items.map(campaign => (
          <div className={Style.blogEntry} key={campaign.id}>
            <Row align={"top"} gutter={24}>
              <Typography.Title style={{ marginTop: "0.3em" }}>{campaign.title}</Typography.Title>
              <Divider />
              <Col>
                <Image
                  priority
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${campaign.imageUrl}`}
                  width={950}
                  height={260}
                  alt="Blog entry image"
                  className={Style.image}
                  style={{
                    width: "100%",
                    //height: "auto"
                  }}
                />
              </Col>
              <Col xl={14} >
                <Typography.Paragraph className={Style.SubTitle}>
                  <h4>{campaign.location}</h4>
                </Typography.Paragraph>
                <Row align="middle">
                  <Col span={24} className={Style.Data}>
                    <div style={{ marginTop: "0.5em" }}>
                      <Typography.Paragraph>
                        <IoCalendarOutline /> {shortDateFormat(campaign.startDate)} - {shortDateFormat(campaign.endDate)}  /{" "}
                        <HiOutlineUserGroup style={{ verticalAlign: "middle" }} /> {campaign.maxVolunteers}
                      </Typography.Paragraph>
                    </div>
                  </Col>
                </Row>

                <Typography.Paragraph>
                  {campaign.description.length > 500 ? campaign.description.slice(0, 500) + "..." : campaign.description}
                </Typography.Paragraph>
                <Row style={{ marginTop: "1em" }}>
                  <Link href={`/campaign/${campaign.id}/title/${campaign.title.toLowerCase().replace(/\s/g, "-")}`}>
                    <Button type="primary" size="middle">
                      <LuSend />
                      <span style={{ color: "var(--color-bg)" }}>Leer más</span>
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </div>
        ))
      }
    </>
  );
};

export default CampaignEntries;