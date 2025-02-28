"use client";
import Style from "./AdultsSection.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Button, Col, Row, Space, Typography } from "@/Presentation/design-system";
// import CatalogCard from "@/Presentation/components/CatalogCard";

const AdultsSection = () => {
  return (
    <section className={`${Utils.section} ${Style.wrapper}`}>
      <Typography.Title level={2}>
        Porque los adultos merecen una segunda oportunidad
      </Typography.Title>

      <Space direction="vertical" size="middle">
        <Typography.Paragraph>
          <p>
            Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Duis non
            ligula interdum, pulvinar mi quis, tincidunt tellus. Etiam quis aliquet nisl. Integer
            fermentum, sapien non sodales lacinia, elit ex bibendum lectus, et volutpat nulla ligula
            at sem.
          </p>
        </Typography.Paragraph>

        <Typography.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ligula interdum,
          pulvinar mi quis, tincidunt tellus.
        </Typography.Text>
      </Space>

      <Row gutter={[24, 24]} className={Style.cardList}>
        {new Array(4).fill(0).map((_, index) => (
          <Col key={index} span={24} sm={12} lg={6}>
            {/* <CatalogCard
              name={"Firulais"}
              specie={"Canino"}
              sex={"Macho"}
              age={2}
              id={""}
              imageSrc={""}
              weight={0}
            /> */}
          </Col>
        ))}
      </Row>

      <div className={Style.buttonContainer}>
        <Button size="large" type="primary">
          Ver todos los adultos
        </Button>
      </div>
    </section>
  );
};

export default AdultsSection;
