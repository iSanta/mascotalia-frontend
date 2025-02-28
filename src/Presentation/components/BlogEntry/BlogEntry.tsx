import Style from "./BlogEntry.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Button, Divider, Space, Typography } from "@/Presentation/design-system";
import { HiCursorClick } from "react-icons/hi";
import { MdOutlineCalendarMonth, MdPets } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

type BlogEntryProps = {
  title: string;
  description: string;
  date: string;
  associatedPets: number;
  volunteers: number;
};

const BlogEntry = (props: BlogEntryProps) => {
  const { title, description, date, associatedPets, volunteers } = props;

  return (
    <article className={Style.wrapper}>
      <Image
        src="/images/la-perla.jpg"
        alt=""
        width={300}
        height={100}
        className={Style.image}
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <Space wrap align="center">
        <MdOutlineCalendarMonth className={Utils.text_primary} style={{ fontSize: "1.6rem" }} />
        <Typography.Paragraph strong>{date} /</Typography.Paragraph>

        <MdPets className={Utils.text_primary} style={{ fontSize: "1.6rem" }} />
        <Typography.Paragraph strong>{associatedPets} /</Typography.Paragraph>

        <PiUsersThreeBold className={Utils.text_primary} style={{ fontSize: "1.6rem" }} />
        <Typography.Paragraph strong>{volunteers}</Typography.Paragraph>
      </Space>

      <Typography.Title level={4}>{title}</Typography.Title>

      <Divider style={{ margin: "0" }} />

      <Typography.Text>{description}</Typography.Text>

      <Link href={"/blog"}>
        <Button>
          <HiCursorClick style={{ fontSize: "1.6rem" }} />
          <span>Leer Más</span>
        </Button>
      </Link>
    </article>
  );
};

export default BlogEntry;
