const checkImageExist = (image: { url: string }) => {
  return image?.url ? process.env.NEXT_PUBLIC_BUCKET_S3 + image.url : "/images/400x400.svg";
};

export default checkImageExist;
