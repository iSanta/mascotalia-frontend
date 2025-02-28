"use client";
import Image from "next/image";
import Link from "next/link";
import Style from "./Header.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Button } from "@/Presentation/design-system";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header className={`${Utils.container} ${Style.header}`}>
      <Image src="/logoHorizontal.svg" alt="Mascotalia Logo" width={160} height={40} />

      <nav className={`${Style.nav} ${Style.mobileNav}`}>
        <Button type="text" shape="circle">
          <HiMenuAlt3
            style={{
              fontSize: "2rem",
            }}
          />
        </Button>
      </nav>

      <nav className={`${Style.nav} ${Style.desktopNav}`}>
        <Link
          href="/about"
          className={`${Utils.none_decoration} ${Utils.text_detail} ${Utils.text_bold_md}`}
        >
          Nosotros
        </Link>

        <Link
          href="/adopt"
          className={`${Utils.none_decoration} ${Utils.text_detail} ${Utils.text_bold_md}`}
        >
          Adopta
        </Link>

        <Link
          href="/campaign"
          className={`${Utils.none_decoration} ${Utils.text_detail} ${Utils.text_bold_md}`}
        >
          Voluntariado
        </Link>

        <Link
          href="/blog"
          className={`${Utils.none_decoration} ${Utils.text_detail} ${Utils.text_bold_md}`}
        >
          Blogs
        </Link>
      </nav>
    </header>
  );
};

export default Header;
