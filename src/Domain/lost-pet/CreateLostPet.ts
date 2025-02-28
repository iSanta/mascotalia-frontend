import { OriginFile } from "../common/OriginFile";

export type CreateLostPet = {
    specieId: string;
    sexId: string;
    sizeId: string;
    contactPhone: number;
    age: number;
    latitude: string;
    longitude: string;
    lostAddress: string;
    description: string;
    contactName: string;
    name: string;
    wasFound: boolean;
    files: {
        file: { uid: string };
        fileList: OriginFile[];
    };
}