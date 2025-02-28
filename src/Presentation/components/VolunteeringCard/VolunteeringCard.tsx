import Image from "next/image";
import Style from "./VolunteeringCard.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Button, Col, Divider, Row, Space, Typography } from "@/Presentation/design-system";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineCalendarMonth, MdPets } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";

type VolunteeringCardProps = {
  title: string;
  description: string;
  foundation: string;
  date: string;
  associatedPets: number;
  volunteers: number;
};

const VolunteeringCard = (props: VolunteeringCardProps) => {
  const { title, foundation, description, date, associatedPets, volunteers } = props;

  return (
    <article className={Style.wrapper}>
      <Typography.Title level={4} ellipsis>
        {title}
      </Typography.Title>
      <Divider />

      <Row gutter={[24, 24]}>
        <Col span={24} xl={10}>
          <Image
            src="/images/la-perla.jpg"
            alt=""
            width={300}
            height={100}
            className={Style.image}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Col>

        <Col span={24} xl={14}>
          <Space direction="vertical">
            <span className={`${Utils.text_bold_sm} ${Utils.text_primary}`}>{foundation}</span>

            <Space wrap align="center">
              <MdOutlineCalendarMonth className={Utils.text_primary} />
              <Typography.Paragraph strong>{date} /</Typography.Paragraph>

              <MdPets className={Utils.text_primary} />
              <Typography.Paragraph strong>{associatedPets} /</Typography.Paragraph>

              <PiUsersThreeBold className={Utils.text_primary} />
              <Typography.Paragraph strong>{volunteers}</Typography.Paragraph>
            </Space>

            <Typography.Text>{description}</Typography.Text>

            <Button type="primary" className={Style.seeDetails}>
              <TbListDetails style={{ fontSize: "1.6rem" }} />
              <span>Ver detalles</span>
            </Button>
          </Space>
        </Col>
      </Row>
    </article>
  );
};

export default VolunteeringCard;
