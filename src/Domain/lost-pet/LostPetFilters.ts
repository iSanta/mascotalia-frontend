import { Ordering } from "../common/Ordering";
import { PaginationProps } from "../common/PaginationProps";

export interface LostPetFilters extends PaginationProps {
    ordering?: Ordering[];
    foundationId?: string;
    specie?: number;
    city?: string;
    cityId?: number;
    sex?: number;
    ownerId?: string;
}