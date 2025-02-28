export type PetToAdopt = {
  id: string;
  identifier: string;
  specie: string;
  sex: string;
  age: number;
  weight: number;
  isDeleted: boolean;
  ownerName: string;
  foundationLogo: string;
  sterilized: boolean;
  dewormed: boolean;
  vaccinated: boolean;
  petImages: {
    url: string;
  };
};
