"use client";
import React from "react";
import { Breadcrumb } from "@/Presentation/design-system";
import Detail from "@/Presentation/components/Detail";
import Style from "./DetailSection.module.scss";
import { Pet } from "@/Domain/pet/detail/Pet";

const DetailSection = ({ petDetail }: { petDetail: Pet }) => {
  return (
    <section className={Style.section}>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Encuentra tu mascota",
            href: "/adopt",
          },
          {
            title: "Detalle de adopción",
          },
        ]}
      />
      <Detail petDetail={petDetail} />
    </section>
  );
};

export default DetailSection;
