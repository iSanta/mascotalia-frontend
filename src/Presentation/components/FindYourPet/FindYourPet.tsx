"use client";
import { act, useEffect } from "react";
import Image from "next/image";

import Style from "./FindYourPet.module.scss";
import useFindYourPetAnimations from "./FindYourPet.animations";
import CallToAction from "./CallToAction";
import Actions from "./Actions";
import Questionnaire from "./Questionnaire";

type FindYourPet = {
  skip: boolean;
};

const FindYourPet = ({ skip }: FindYourPet) => {

  const { active, handleActive, clearAnimations } = useFindYourPetAnimations(skip);

  useEffect(() => {
    return () => {
      clearAnimations();
    };
  }, []);

  return (
    <section className={Style.wrapper}>
      <div className={Style.background} />

      <div className={Style.eslogan}>
        <Image
          src={"/eslogan.svg"}
          alt="Dog Shape"
          width={550}
          height={160}
          className={`${Style.esloganImage} ${active ? Style.active : ""}`}
        />
      </div>

      <div className={`${Style.dogShape} ${active ? Style.active : ""}`}>
        <div className={Style.dogShapeContainer}>
          <Image
            src={"/shapes/homeDogShape.svg"}
            alt="Dog Shape"
            width={400}
            height={400}
            className={Style.dogShapeImage}
          />

          {!active && <CallToAction onClick={handleActive} />}
        </div>
      </div>

      <Actions active={active} />
      {active && <Questionnaire />}
    </section>
  );
};

export default FindYourPet;
