"use client";
import React, { useEffect, useMemo } from "react";
import {
  Breadcrumb,
  Card,
  Col,
  Row,
} from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import BlogEntry from "@/Presentation/components/Blog/BlogEntry";
import Entries from "@/Presentation/components/Blog/Entries";
import Style from "./BlogSection.module.scss";
import LabelSearch from "@/Presentation/components/Blog/LabelSearch";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { Blog } from "@/Domain/blog/Blog";
import useBlog from "@/Application/blog/useBlog";
import { RecentEntries } from "@/Domain/blog/RecentEntries";
import { Tag } from "@/Domain/tag/Tag";
import useQueryParams from "@/Application/query-params/useQueryParams";
import BlogPagination from "../BlogPagination";
import InputSearch from "@/Presentation/components/common/InputSearch";
import LoadingSpinner from "@/Presentation/components/common/LoadingSpinner";

type BlogSectionProps = {
  blogs: PaginatedResponse<Blog[]>;
  recentEntries?: RecentEntries[];
  tags?: Tag[];
};

const BlogSection = ({ blogs, recentEntries, tags }: BlogSectionProps) => {
  const {
    setBlogs,
    getBlogs,
    getBlogsAsync,
    getBlogsByTitleAsync,
    setBlogRequestType,
    setBlogRequestData,
  } = useBlog();

  const { getParam, setParms } = useQueryParams();

  const blogsMemo = useMemo(() => getBlogs(), [getBlogs()]);

  useEffect(() => {
    setBlogs(blogs);
  }, []);

  return (
    <section className={Utils.section}>
      <LoadingSpinner loading={blogsMemo.status === "loading"} />
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
        ]}
      />

      <Row gutter={[24, 24]}>
        <Col flex="auto" xl={18} md={16}>
          <main className={Style.blogEntry}>
            {blogsMemo.pagination.value?.items?.map((blog) => (
              <BlogEntry key={blog.id} data={blog} />
            ))}
          </main>
        </Col>
        <Col xl={6} md={8}>
          <Row gutter={16} className={Style.searchBar}>
            <InputSearch
              onEmpty={() => {
                setBlogRequestType("default");
                getBlogsAsync(getParam("Page") || "1");
              }}
              onSubmit={(value) => {
                setBlogRequestType("textSearch");
                setBlogRequestData(value);
                setParms("Page", "1");
                value && getBlogsByTitleAsync(value, "1");
              }}
            />
          </Row>
          {recentEntries && (
            <div style={{ marginTop: "2em" }}>
              <Entries
                title={"Entradas Recientes"}
                entries={recentEntries}
                url={(entry: RecentEntries) => {
                  return `/blog/${entry.id}/title/${entry.title.toLowerCase().replace(/\s/g, "-")}`;
                }}
              />
            </div>
          )}
          {tags && (
            <Card style={{ marginTop: "2em" }}>
              <LabelSearch tags={tags} />
            </Card>
          )}
          <div style={{ marginTop: "2em" }}>
            {recentEntries && (
              <Entries
                title={"Quizás te pueda interesar"}
                entries={recentEntries}
                url={(entry: RecentEntries) => {
                  return `/blog/${entry.id}/title/${entry.title.toLowerCase().replace(/\s/g, "-")}`;
                }}
              />
            )}
          </div>
        </Col>
      </Row>
      <BlogPagination />
    </section>
  );
};

export default BlogSection;
