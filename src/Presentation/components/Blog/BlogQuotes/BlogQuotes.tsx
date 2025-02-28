import React from "react";
import { PiQuotes } from "react-icons/pi";
import Style from "./BlogQuotes.module.scss";
import { Col, Row, Typography } from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";

const BlogQuotes = ({ text }: { text: string }) => {
  return (
    <>
      <Row className={Style.Comment} align={"middle"}>
        <Col xl={3} md={6} style={{ padding: "1em" }}>
          <PiQuotes className={Style.Quotes} color="white" />
        </Col>
        <Col xl={21} md={17}>
          <Typography.Paragraph className={Utils.text_bold_lg}>
            <p>{text}</p>
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default BlogQuotes;
