"use client";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import Style from "./VolunteeringSection.module.scss";
import { Button, Space, Typography, Col, Row } from "@/Presentation/design-system";
import VolunteeringCard from "@/Presentation/components/VolunteeringCard";

const VolunteeringSection = () => {
  return (
    <section className={`${Utils.section} ${Style.wrapper}`}>
      <Typography.Title level={2}>Campañas de volunatariado recientes</Typography.Title>

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

      <Row gutter={[48, 48]} className={Style.cards}>
        <Col span={24} md={12}>
          <VolunteeringCard
            title="Campaña de adopción"
            description={
              "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
            }
            foundation="Fundación Corazón Animal"
            date="Feb 14, 2025 - Feb 28, 2025"
            associatedPets={18}
            volunteers={14}
          />
        </Col>

        <Col span={24} md={12}>
          <VolunteeringCard
            title="Jornadas de desparasitación"
            description={
              "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
            }
            foundation="Centro de Bienestar Animal La Perla"
            date="Mar 1, 2025 - Mar 30, 2025"
            associatedPets={72}
            volunteers={31}
          />
        </Col>
      </Row>

      <div className={Style.buttonContainer}>
        <Button size="large" type="primary">
          Ver todas las campañas
        </Button>
      </div>
    </section>
  );
};

export default VolunteeringSection;
