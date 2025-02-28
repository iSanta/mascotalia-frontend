"use client";
import React from "react";
import { Breadcrumb, Col, Row, Typography } from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import Entries from "@/Presentation/components/Blog/Entries";
import Style from "./BlogDetailSection.module.scss";
import { BlogDetail } from "@/Domain/blog/BlogDetail";
import { RecentEntries } from "@/Domain/blog/RecentEntries";
import BlogDetailEntry from "@/Presentation/components/Blog/BlogDetailEntry";
import useBlogDetail from "@/Application/blog/useBlogDetail";

type BlogSectionProps = {
  blogDetail: BlogDetail;
  recentEntries: RecentEntries[];
};

const BlogDetailSection = ({ blogDetail, recentEntries }: BlogSectionProps) => {
  const { showEntryWithFluidImages } = useBlogDetail();

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
            title: "Blogs",
            href: "/blog",
          },
          {
            title: "Detail",
            href: "/#",
          },
        ]}
      />

      <Row gutter={[24, 24]}>
        <Col flex="auto" xl={18} md={16}>
          <Row gutter={[0, 24]}>
            <Row className={Style.Image1}>
              <BlogDetailEntry data={blogDetail} />
            </Row>
            <Row>
              <Typography.Paragraph className={Utils.text_bold_lg}>
                {showEntryWithFluidImages(blogDetail.entry, blogDetail.images, blogDetail.quote)}
              </Typography.Paragraph>
            </Row>
          </Row>
        </Col>

        <Col xl={6} md={8}>
          <Row>
            <Entries
              title={"Entradas recientes"}
              entries={recentEntries}
              url={(entry: RecentEntries) => {
                return `/blog/${entry.id}/title/${entry.title.toLowerCase().replace(/\s/g, "-")}`;
              }}
            />
            <div style={{ marginTop: "2em" }}>
              <Entries
                title={"Quizás te pueda interesar"}
                entries={recentEntries}
                url={(entry: RecentEntries) => {
                  return `/blog/${entry.id}/title/${entry.title.toLowerCase().replace(/\s/g, "-")}`;
                }}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default BlogDetailSection;
