import { AbstractRate, AbstractRateProps } from "@/Infrastructure/design-system";

export type RateProps = AbstractRateProps & {};

export function Rate(props: RateProps) {
  return <AbstractRate {...props} />;
}
