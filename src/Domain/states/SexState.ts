import { FetchStatus } from "../common/FetchStatus";
import { Sex } from "../pet/sex/Sex";

export interface SexState extends FetchStatus {
  sex: Sex[];
}
