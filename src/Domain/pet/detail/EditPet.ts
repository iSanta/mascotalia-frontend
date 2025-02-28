import { UploadFile } from "antd";

export type EditPet = {
  specieId: number;
  sexId: number;
  age: number;
  weight: number;
  dewormed: boolean;
  vaccinated: boolean;
  description: string;
  files: UploadFile[];
};
