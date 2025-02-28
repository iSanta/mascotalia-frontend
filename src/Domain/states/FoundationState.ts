import { CommonResponse } from "../common/CommonResponse";
import { FetchStatus } from "../common/FetchStatus";
import { Foundation } from "../foundation/Foundation";

export interface FoundationState extends FetchStatus {
  foundations: Foundation[];
}
