import { BlogDetail } from "@/Domain/blog/BlogDetail";
import { RecentEntries } from "@/Domain/blog/RecentEntries";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { getBlog } from "@/Infrastructure/blog/get-blog";
import { getRecentEntries } from "@/Infrastructure/blog/get-recent-entries";
import BlogDetailSection from "@/Presentation/layout/blog/BlogDetailSection";
import { Suspense } from "react";

const getBlogDetail = async (
  blogId: string
): Promise<[CommonResponse<BlogDetail>, CommonResponse<RecentEntries[]>]> => {
  return Promise.all([getBlog(blogId), getRecentEntries()]);
};

export default async function blogDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const [blogDetail, recentEntries] = await getBlogDetail(params.id);

  return (
    <Suspense>
      <BlogDetailSection blogDetail={blogDetail.value} recentEntries={recentEntries.value} />
    </Suspense>
  );
}
