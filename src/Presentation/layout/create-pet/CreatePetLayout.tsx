"use client";
import React from 'react'
import CreatePetSection from './CreatePetSection'
import { App } from 'antd';
import useAuth from "@/Application/auth/useAuth";

const CreatePetLayout = () => {
  useAuth({ authorizedRoles: ["Admin", "Foundation"] });
  return (
    <CreatePetSection />
  )
}

export default CreatePetLayout