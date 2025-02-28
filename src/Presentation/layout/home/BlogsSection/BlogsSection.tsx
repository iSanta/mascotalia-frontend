"use client";
import Style from "./BlogsSection.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Button, Space, Typography } from "@/Presentation/design-system";
import BlogEntry from "@/Presentation/components/BlogEntry";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

const BlogsSection = () => {
  return (
    <section className={`${Utils.section} ${Style.wrapper}`}>
      <Typography.Title level={2}>Nuestros Blogs</Typography.Title>

      <Space direction="vertical" size="middle">
        <Typography.Paragraph>
          <p>
            Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Duis non
            ligula interdum, pulvinar mi quis, tincidunt tellus. Etiam quis aliquet nisl. Integer
            fermentum, sapien non sodales lacinia, elit ex bibendum lectus, et volutpat nulla ligula
            at sem.
          </p>
        </Typography.Paragraph>

        <Typography.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ligula interdum,
          pulvinar mi quis, tincidunt tellus.
        </Typography.Text>
      </Space>

      <div className={Style.entries}>
        <button className={Style.entryButton}>
          <HiArrowSmLeft className={Style.arrow} />
        </button>

        <BlogEntry
          title="Aprende a cuidar de tus mascotas"
          description={
            "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
          }
          date="Feb 14, 2025"
          associatedPets={18}
          volunteers={14}
        />

        <button className={Style.entryButton}>
          <HiArrowSmRight className={Style.arrow} />
        </button>
      </div>

      <Button size="large" type="primary" className={Style.seeMoreButton}>
        Ver más blogs
      </Button>
    </section>
  );
};

export default BlogsSection;
