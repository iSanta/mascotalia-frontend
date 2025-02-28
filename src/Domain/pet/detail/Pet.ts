export type Pet = {
  id: string;
  identifier: string;
  contactPhone: string;
  specie: string;
  description: string;
  dewormed: boolean;
  sterilized: boolean;
  location: string;
  vaccinated: boolean;
  sex: string;
  ownerName: string;
  age: number;
  weight: number;
  size: string;
  foundationLogo: string;
  foundationId: string;
  petImages: PetImages[];
  recomendations: string[];
};

export interface PetImages {
  petId: string;
  url: string;
  pet?: any;
  id: string;
  createdAt: string;
  updatedAt: string;
}
