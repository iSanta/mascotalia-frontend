import { Card, Typography, Flex } from "@/Presentation/design-system";
import Style from "./CatalogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import checkImageExist from "@/Application/utils/checkImageExist";
import useTranslate from "@/Application/translate/useTranslate";
import Like from "../common/Favorites/Like/Like";


type CatalogCardProps = {
  id: string;
  name?: string;
  specie: string;
  sex: string;
  age: number;
  weight: number;
  imageSrc: string;
};

const CatalogCard = ({ name, specie, sex, age, imageSrc, id, weight }: CatalogCardProps) => {
  const { t } = useTranslate();

  return (
    <Link href={`/adopt/detail/${specie.toLowerCase()}/${id}`}>
      <Card hoverable bordered={false} className={Style.card}>

        <Like pet={{
          id,
          imageUrl: imageSrc,
          specie,
          age
        }} />

        <Flex vertical gap={8}>
          <Image
            priority
            src={checkImageExist({ url: imageSrc })}
            alt="Pet image"
            width={300}
            height={300}
            className={Style.cardImage}
          />

          <Flex vertical align="center">
            {name && <Typography.Paragraph strong>{name}</Typography.Paragraph>}
            <Typography.Text>{t(specie)}</Typography.Text>
          </Flex>

          <Flex
            justify="space-between"
            align="center"
            gap={32}
            className={Style.cardDetails}
            // Mover a una clase
            style={{
              position: "relative",
            }}
          >
            <Typography.Text>{t(sex)}</Typography.Text>
            <Typography.Text
              // Mover a una clase
              style={{
                position: "absolute",
                textAlign: "center",
                width: "calc(100% - 48px)",
              }}
            >
              {age} años
            </Typography.Text>

            <Image
              src="/images/dog.jpg"
              alt="Image"
              width={32}
              height={32}
              // Mover a una clase
              style={{
                borderRadius: "0.4rem",
                objectFit: "cover",
              }}
            />
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};
export default CatalogCard;
