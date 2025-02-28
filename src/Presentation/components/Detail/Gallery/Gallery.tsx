import React, { useState } from "react";
import { Flex, Button } from "@/Presentation/design-system";
import Image from "next/image";
import Style from "./Gallery.module.scss";
import checkImageExist from "@/Application/utils/checkImageExist";
import useWebDb from "@/Infrastructure/web-db/useWebDb";
import { IDBStore } from "@/Infrastructure/web-db/IDBStore";
import Like from "../../common/Favorites/Like/Like";
import { PetLike } from "@/Domain/pet/store/PetLike";

const Gallery = ({ urls, pet }: { urls: string[], pet: PetLike }) => {
  useWebDb(IDBStore.PetLike);

  const [currentImage, setCurrentImage] = useState({
    url: checkImageExist({ url: urls[0] }),
  });
  return (
    <Flex vertical gap={18} className={Style.gallery}>

      <Like pet={{
        id: pet.id,
        imageUrl: pet.imageUrl,
        specie: pet.specie,
        age: pet.age
      }} />

      <Image
        src={currentImage.url}
        width={560}
        height={476}
        alt="Pet Photo"
        className={Style.galleryImage}
      />

      <Flex gap={12} className={Style.imagesContainer}>
        {urls.map((url, index) => {
          const fullUrl = `${process.env.NEXT_PUBLIC_BUCKET_S3}${url}`;
          return (
            <Button
              key={index}
              className={Style.galleryButton}
              onClick={() => setCurrentImage({ url: fullUrl })}
              variant={currentImage.url == fullUrl ? "outlined" : "text"}
              color={currentImage.url == fullUrl ? "danger" : "default"}
            >
              <Image
                priority
                src={fullUrl}
                width={102}
                height={102}
                alt="Pet Photo"
                className={Style.image}
              />
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Gallery;
