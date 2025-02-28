import { FetchStatus } from "../common/FetchStatus";
import { Specie } from "../pet/specie/Specie";

export interface SpecieState extends FetchStatus {
  species: Specie[];
}
