import { AbstractCol, AbstractColProps } from "@/Infrastructure/design-system";

export type ColProps = AbstractColProps & {};

export function Col(props: ColProps) {
  return <AbstractCol {...props} />;
}
