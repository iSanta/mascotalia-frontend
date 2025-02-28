import Style from "./Banner.module.scss";

type BannerProps = {
  title: string;
  description: string;
};

const Banner = ({ title, description }: BannerProps) => {
  return (
    <article className={Style.bannerContainer}>
      <div className={Style.bannerContent}>
        <span className={Style.bannerTitle}>{title}</span>
        <span className={Style.bannerDescription}>{description}</span>
      </div>
    </article>
  );
};

export default Banner;
