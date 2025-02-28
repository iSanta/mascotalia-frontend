"use client";
import CreateBlogSection from './CreateBlogSection'
import useAuth from "@/Application/auth/useAuth";

const CreatePetLayout = () => {
  useAuth({ authorizedRoles: ["Admin", "Foundation"] });
  return (
    <CreateBlogSection />
  )
}

export default CreatePetLayout