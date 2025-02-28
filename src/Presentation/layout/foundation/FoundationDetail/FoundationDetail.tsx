"use client";
import React from "react";
import Style from "./FoundationDetail.module.scss";
import Image from "next/image";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Button, Col, Row, Skeleton, Space, Typography } from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Foundation } from "@/Domain/foundation/Foundation";
import Link from "next/link";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import PetRecommendations from "@/Presentation/components/Adopt/PetRecommendations";

const FoundationDetail = ({
  foundationDetail,
  foundationPets,
}: {
  foundationDetail: Foundation;
  foundationPets: PetToAdopt[];
}) => {
  if (!foundationDetail) {
    return <Skeleton active />;
  }
  return (
    <section className={Utils.section}>
      <Row gutter={[24, 24]} align={"middle"}>
        <Col span={8}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${foundationDetail.logo}`}
            alt={`${foundationDetail.foundationName} logo`}
            width={500}
            height={500}
            priority
            style={{
              aspectRatio: "1/1",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col span={16}>

          <Typography.Title level={4}>{foundationDetail.foundationName}</Typography.Title>

          <Typography.Paragraph>{foundationDetail.description}</Typography.Paragraph>

          <Row align={"middle"} justify={"space-evenly"} className={Style.foundationActions}>
            <Col span={20}>
              <Link href={`/adopt?ownerId=${foundationDetail.ownerId}`}>
                <Button buttontype="gradient">Ver todos los animales en adopción</Button>
              </Link>
            </Col>
            <Col span={4}>
              <Space style={{ width: '100%' }} size="large">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={25} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={25} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={25} />
                </a>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>

      {foundationPets && foundationPets.length > 0 && (
        <PetRecommendations        
          pets={foundationPets}
          title="Conoce los animales en adopción de la fundación"
        />
      )}

    </section>
  );
};

export default FoundationDetail;
