"use client";
import { Button, Typography, Input } from "@/Presentation/design-system";
import Style from "./Footer.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={Style.footerWrapper}>
      <div className={Utils.container}>
        <nav className={Style.nav}>
          <Link
            href="/about"
            className={`${Utils.none_decoration} ${Utils.text_bg} ${Utils.text_regular_md}`}
          >
            Nosotros
          </Link>

          <Link
            href="/catalog"
            className={`${Utils.none_decoration} ${Utils.text_bg} ${Utils.text_regular_md}`}
          >
            Adopta
          </Link>

          <Link
            href="/blogs"
            className={`${Utils.none_decoration} ${Utils.text_bg} ${Utils.text_regular_md}`}
          >
            Blogs
          </Link>

          <Link
            href="/camapign"
            className={`${Utils.none_decoration} ${Utils.text_bg} ${Utils.text_regular_md}`}
          >
            Campañas
          </Link>

          <div className={Style.socialMedia}>
            <Link href="#" className={Style.link}>
              <FaFacebook className={Style.icon} />
            </Link>

            <Link href="#" className={Style.link}>
              <FaTwitter className={Style.icon} />
            </Link>

            <Link href="#" className={Style.link}>
              <RiInstagramFill className={Style.icon} />
            </Link>

            <Link href="#" className={Style.link}>
              <FaYoutube className={Style.icon} />
            </Link>
          </div>
        </nav>

        <div className={Style.newsLatterSection}>
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

        <div className={Style.footerContainer}>
          <Typography.Text className={Style.footerCopy}>
            @ Mascotalia. Todos los derechos reservados
          </Typography.Text>

          <Image
            src="/logoHorizontalBlanco.svg"
            alt="Mascotalia Logo"
            width={160}
            height={40}
            className={Style.footerLogo}
          />

          <div className={Style.footerPolices}>
            <Typography.Text>Terminos de Servicio</Typography.Text>
            <Typography.Text>Política de Privacidad</Typography.Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
