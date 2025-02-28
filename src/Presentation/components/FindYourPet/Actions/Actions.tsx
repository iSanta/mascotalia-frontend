"use client";
import Image from "next/image";

import Style from "./Actions.module.scss";
import { Button, Typography } from "@/Presentation/design-system";

type Props = {
  active: boolean;
};

const Actions = (props: Props) => {
  const { active } = props;

  return (
    <div className={`${Style.actions} ${active ? Style.active : ""}`}>
      <div className={Style.blogContainer}>
        <Image src={"/images/home/blog.svg"} alt="Blog" width={160} height={160} />

        <div className={Style.blogContent}>
          <Typography.Title level={4}>Aprende a Cuidar De Tus Mascotas</Typography.Title>

          <Typography.Paragraph>
            Aprende los cuidados que mascotas merecen con nuestra guía preparada.
          </Typography.Paragraph>
        </div>
      </div>

      <div className={Style.volunteeringContainer}>
        <Typography.Title level={4}>Transforma Una Vida</Typography.Title>

        <Typography.Paragraph>
          Únete como voluntario a las campañas activas de nuestras fundaciones aliadas.
        </Typography.Paragraph>

        <Button size="large" buttontype="gradient">
          Quiero unirme como voluntario
        </Button>
      </div>
    </div>
  );
};

export default Actions;
