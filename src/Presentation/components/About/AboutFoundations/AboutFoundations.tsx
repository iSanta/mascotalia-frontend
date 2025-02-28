"use client";
import useAboutFoundations from "@/Application/about/useAboutFoundations";
import { useEffect } from "react";
import AboutFoundationsCard from "../AboutFoundationsCard";
import Style from "./AboutFoundations.module.scss";
import Link from "next/link";

const AboutFoundations = () => {
  const { getFoundations, foundations } = useAboutFoundations();

  useEffect(() => {
    (async () => {
      getFoundations();
    })();
  }, []);

  return (
    <div className={Style.cardSection}>
      {foundations?.map((foundation) => (
        <Link href={`foundation/${foundation.id}`} key={foundation.id}>
          <AboutFoundationsCard
            animals={foundation.petCount}
            title={foundation.name}
            image={foundation.logo}
            type="Fundación"
          />
        </Link>
      ))}
    </div>
  );
};

export default AboutFoundations;
