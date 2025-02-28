import { City } from "../city/City";
import { FetchStatus } from "../common/FetchStatus";

export interface CityState extends FetchStatus {
  cities: City[];
}
