import { OriginFile } from "../common/OriginFile";

export type CreateBlog = {
  title: string;
  entry: string;
  quote: string;
  files: {
    file: { uid: string };
    fileList: OriginFile[];
  };
  tags: number[];
};
