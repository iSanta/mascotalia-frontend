"use client";
import useAuth from "@/Application/auth/useAuth";
import { Tag } from "@/Domain/tag/Tag";
import CreateBlogForm from "@/Presentation/components/Blog/CreateBlogForm";
import React, { useEffect } from "react";

type CreateBlogLayoutProps = {
  tags: Tag[];
};

const CreateBlogLayout = ({ tags }: CreateBlogLayoutProps) => {
  useAuth({ authorizedRoles: ["Admin", "Foundation"] });

  return (
    <CreateBlogForm tags={tags} />
  );
};

export default CreateBlogLayout;
