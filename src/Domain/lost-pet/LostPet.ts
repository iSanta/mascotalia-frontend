export type LostPet = {
    id: string;
    identifier: string;
    specie: string;
    sex: string;
    age: number;
    weight: number;
    isDeleted: boolean;
    ownerName: string;
    foundationLogo: string;
    dewormed: boolean;
    vaccinated: boolean;
    petImages: {
        url: string;
    };
}