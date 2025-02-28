import { AbstractEmpty, AbstractEmptyProps } from "@/Infrastructure/design-system";

export type EmptyProps = AbstractEmptyProps & {};

export function Empty(props: EmptyProps) {
  return <AbstractEmpty {...props} />;
}
