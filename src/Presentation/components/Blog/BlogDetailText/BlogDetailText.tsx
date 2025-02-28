import React from "react";
import Image from "next/image";
import Style from "./BlogDetailText.module.scss";

type BlogDetailTextProps = {
  text: string;
  float: "right" | "left";
  imageUrl: string;
};

const BlogDetailText = ({ text, float, imageUrl }: BlogDetailTextProps) => {
  return (
    <>
      <div className={Style.test} style={{ marginBottom: "20px" }}>
        {text}
      </div>
      <Image className={Style.Images}
        style={{
          float,
          marginRight: float === "left" && "20px",
          marginLeft: float === "right" && "20px",
          marginBottom: "10px",
          marginTop: "10px",
          height: "auto",
        }}
        width={350}
        height={200}
        src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${imageUrl}`}
        alt={`blog image`}
      />
    </>
  );
};

export default BlogDetailText;
