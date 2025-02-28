import { OriginFile } from "../common/OriginFile";

export type CreateCampaign = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    locationAddress: string;
    file: {
        file: { uid: string };
        fileList: OriginFile[];
    };
    isActive: boolean;
    maxVolunteers: number;
}