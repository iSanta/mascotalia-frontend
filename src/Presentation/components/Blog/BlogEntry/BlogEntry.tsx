import React from "react";
import Image from "next/image";
import Style from "./BlogEntry.module.scss";
import { IoCalendarOutline } from "react-icons/io5";
import { Button, Col, Divider, Row, Typography } from "@/Presentation/design-system";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuSend } from "react-icons/lu";
import { Blog } from "@/Domain/blog/Blog";
import useDate from "@/Application/date/useDate";
import Link from "next/link";

const BlogEntry = ({ data }: { data: Blog }) => {
  const { shortDateFormat } = useDate();

  return (
    <div className={Style.blogEntry}>
      <Image
        priority
        src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${data.image}`}
        width={950}
        height={400}
        alt="Blog entry image"
        className={Style.image}
        style={{
          width: "100%",
          //height: "auto",
        }}
      />
      <Row align="middle">
        <Col span={24}>
          <div style={{ marginTop: "0.5em" }}>
            <Typography.Text>
              <IoCalendarOutline /> {shortDateFormat(data.createdAt)} /{" "}
              <FaRegHeart style={{ verticalAlign: "middle" }} /> 70 /{" "}
              <HiOutlineUserGroup style={{ verticalAlign: "middle" }} /> {data.createdBy}
            </Typography.Text>
          </div>
        </Col>
      </Row>
      <Typography.Title style={{ marginTop: "0.3em" }}>{data.title}</Typography.Title>
      <Divider />
      <Typography.Paragraph>
        {data.entry.length > 500 ? data.entry.slice(0, 500) + "..." : data.entry}
      </Typography.Paragraph>
      <Row style={{ marginTop: "1em" }}>
        <Link href={`/blog/${data.id}/title/${data.title.toLowerCase().replace(/\s/g, "-")}`}>
          <Button type="primary" size="middle">
            <LuSend />
            <span style={{ color: "var(--color-bg)" }}>Leer más</span>
          </Button>
        </Link>
      </Row>
    </div>
  );
};

export default BlogEntry;
