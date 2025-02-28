import { AbstractFlex, AbstractFlexProps } from "@/Infrastructure/design-system";

export type FlexProps = AbstractFlexProps & {};

export function Flex(props: FlexProps) {
  return <AbstractFlex {...props} />;
}
