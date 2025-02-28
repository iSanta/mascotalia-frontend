"use client";
import { Button, Typography, Input } from "@/Presentation/design-system";
import Style from "./HomeFooter.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import Image from "next/image";

const HomeFooter = () => {
  return (
    <footer className={Style.wrapper}>
      <div className={Utils.section}>
        <Image
          src="/shapes/footerShape2.svg"
          alt="Forma abstracta"
          className={Style.footerShape2}
          width={100}
          height={100}
        />

        <Typography.Title level={2} className={Style.footerTitle}>
          Suscríbase ahora para no perderse nuestros programas
        </Typography.Title>
      </div>

      <div className={`${Style.newsLatterSection}`}>
        <div className={Style.newsLatterContainer}>
          <div>
            <span className={`${Utils.text_primary} ${Utils.text_bold_lg}`}>
              Te mantendremos informado de nuevo contenido y campañas de voluntariado
            </span>
          </div>

          <div className={Style.newsLatterForm}>
            <Input placeholder="Su correo" size="large" />

            <Button type="primary" size="large">
              Suscribirme
            </Button>
          </div>
        </div>
      </div>

      <div className={`${Utils.container} ${Style.footerContainer}`}>
        <Typography.Text className={Style.footerCopy}>
          @ Mascotalia. Todos los derechos reservados
        </Typography.Text>

        <Image
          src="/logoHorizontal.svg"
          alt="Mascotalia Logo"
          width={160}
          height={40}
          className={Style.footerLogo}
        />

        <div className={Style.footerPolices}>
          <Typography.Text>Terminos de Servicio</Typography.Text>
          <Typography.Text>Política de Privacidad</Typography.Text>
        </div>

        <Image
          src="/shapes/footerShape1.svg"
          alt="Forma abstracta"
          className={Style.footerShape1}
          width={70}
          height={70}
        />

        <Image
          src="/shapes/footerShape3.svg"
          alt="Forma abstracta"
          className={Style.footerShape3}
          width={200}
          height={200}
        />
      </div>
    </footer>
  );
};

export default HomeFooter;
