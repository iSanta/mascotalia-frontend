import { Blog } from "@/Domain/blog/Blog";
import { RecentEntries } from "@/Domain/blog/RecentEntries";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { Tag } from "@/Domain/tag/Tag";
import { getBlogs } from "@/Infrastructure/blog/get-blogs";
import { getRecentEntries } from "@/Infrastructure/blog/get-recent-entries";
import { getTags } from "@/Infrastructure/tag/get-tags";
import BlogSection from "@/Presentation/layout/blog/BlogSection/BlogSection";
import { Suspense } from "react";

const get = async (
  page?: string
): Promise<
  [
    PaginatedResponse<Blog[]>,
    CommonResponse<RecentEntries[]>,
    CommonResponse<Tag[]>
  ]
> => {
  return Promise.all([getBlogs(page || "1"), getRecentEntries(), getTags()]);
};

export default async function blog(props: { searchParams: Promise<{ Page: string }> }) {
  const searchParams = await props.searchParams;
  const [blogs, recentEntries, tags] = await get(searchParams.Page);
  return (
    <Suspense>
      <BlogSection blogs={blogs} recentEntries={recentEntries?.value} tags={tags?.value} />
    </Suspense>
  );
}
