import { OriginFile } from "../common/OriginFile";

export type CreatePet = {
  pets: {
    sterilized: boolean;
    dewormed: boolean;
    vaccinated: boolean;
    specie: number;
    sex: number;
    size: number;
    weight: number;
    identifier: string;
    age: number;
    description: string;
    files: {
      file: { uid: string };
      fileList: OriginFile[];
    };
  }[];
};
