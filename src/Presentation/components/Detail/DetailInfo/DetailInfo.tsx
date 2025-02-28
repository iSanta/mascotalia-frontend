import React from "react";
import { Flex, Col, Row, Typography } from "@/Presentation/design-system";
import { MdOutlinePets } from "react-icons/md";
import Image from "next/image";
import Style from "./DetailInfo.module.scss";
import useTranslate from "@/Application/translate/useTranslate";
import Link from "next/link";

type DetailInfoProp = {
  name?: string;
  specie?: string;
  imageSrc?: string;
  foundationId: string;
  city?: string;
  className?: string;
};

const DetailInfo = ({ name, specie, imageSrc, city, className, foundationId }: DetailInfoProp) => {
  const { t } = useTranslate();

  return (
    <Row gutter={[24, 24]} className={className}>
      <Col span={24}>
        <Row align="middle">
          <Col span={18} xs={16}>
            <Row align="middle">
              <Col flex="auto">
                <Typography.Title level={3} ellipsis={{ rows: 1, expandable: false }}>
                  {name}
                </Typography.Title>
              </Col>
              <Col flex="120px">
                <Flex align="center" gap={24}>
                  <MdOutlinePets style={{ color: "var(--color-secundary)" }} />
                  <Typography.Paragraph className={Style.specie}>{t(specie)}</Typography.Paragraph>
                </Flex>
              </Col>
            </Row>
            <Typography.Text>{city}</Typography.Text>
          </Col>
          <Col flex="auto" span={6} xs={8} className={Style.imageContainer}>

            <Row justify="end">
              <Link href={`/foundation/${foundationId}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${imageSrc}`}
                  width={92}
                  height={92}
                  alt="Foundation"
                  className={Style.image}
                />
              </Link>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DetailInfo;
