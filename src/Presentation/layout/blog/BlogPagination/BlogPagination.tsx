import useBlog from "@/Application/blog/useBlog";
import useBlogRequestStrategy from "@/Application/blog/useBlogRequestStrategy";
import useQueryParams from "@/Application/query-params/useQueryParams";
import { Pagination } from "@/Presentation/design-system";
import React, { useMemo } from "react";

const BlogPagination = () => {
  const { setParms, getParam } = useQueryParams();
  const { getBlogs, getBlogRequestType, getBlogRequestData } = useBlog();
  const { requestSelector } = useBlogRequestStrategy();

  const blogsMemo = useMemo(() => getBlogs().pagination, [getBlogs().pagination]);

  return (
    <Pagination
      onChange={async (e) => {
        setParms("Page", e.toString());
        requestSelector(getBlogRequestType(), e.toString(), getBlogRequestData());
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      maxPages={blogsMemo.value.totalPages}
      initialCurrentPage={Number(getParam("Page")) || 1}
    />
  );
};

export default BlogPagination;
