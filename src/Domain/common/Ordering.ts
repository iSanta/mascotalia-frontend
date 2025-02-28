export interface Ordering {
  property: string;
  type: OrderingType;
}

export enum OrderingType {
  Ascending,
  Descending,
}
