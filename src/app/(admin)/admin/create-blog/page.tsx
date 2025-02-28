import { Suspense } from "react";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Tag } from "@/Domain/tag/Tag";
import AdminLayout from "@/Presentation/layout/adminview/AdminViewLayout";
import CreateBlogLayout_ from '@/Presentation/layout/create-blog/CreateBlogLayout';

const get = async (): Promise<CommonResponse<Tag[]>> => {
  //return await getTags();
  return {
    success: true,
    value: [
      { id: 1, value: "JavaScript" },
      { id: 2, value: "React" },
      { id: 3, value: "TypeScript" },
    ],
    message: "Mocked data",
  };
};

export default async function createBlog() {
  const tags = await get();
  return (
    <Suspense>
      <AdminLayout selectedKey="3" breadcrumbTitle="Crear entrada de blog">
        <CreateBlogLayout_ />
      </AdminLayout>
    </Suspense>
  );
}
