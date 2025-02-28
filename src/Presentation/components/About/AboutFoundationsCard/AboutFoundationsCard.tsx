import Image from "next/image";
import Style from "./AboutFoundationsCard.module.scss";

type AboutFoundationsCardProps = {
  image: string;
  title: string;
  type: string;
  animals: number;
};

const AboutFoundationsCard = ({ image, title, type, animals }: AboutFoundationsCardProps) => {
  return (
    <div className={Style.card}>
      <div className={Style.imageWrapper}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${image}`}
          alt={title}
          className={Style.image}
          layout="responsive"
          width={300}
          height={200}
        />
      </div>
      <div className={Style.content}>
        <h3 className={Style.title}>{title}</h3>
        <p className={Style.type}>{type}</p>
        <p className={Style.info}>Animales disponibles: {animals}</p>
      </div>
    </div>
  );
};

export default AboutFoundationsCard;
