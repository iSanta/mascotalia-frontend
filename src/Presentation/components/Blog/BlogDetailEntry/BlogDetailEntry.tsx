import React from "react";
import Image from "next/image";
import Style from "./BlogDetailEntry.module.scss";
import { IoCalendarOutline } from "react-icons/io5";
import { Col, Divider, Row, Typography } from "@/Presentation/design-system";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import useDate from "@/Application/date/useDate";
import { BlogDetail } from "@/Domain/blog/BlogDetail";


const BlogDetailEntry = ({ data }: { data: BlogDetail }) => {
    const { shortDateFormat } = useDate();

    return (
        <div className={Style.blogEntry}>
          <Image
            priority
            src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${data.images[0]}`}
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
        </div>
      );
    };
    
    export default BlogDetailEntry;
    