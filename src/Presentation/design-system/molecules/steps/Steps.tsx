import { AbstractSteps, AbstractStepsProps } from "@/Infrastructure/design-system";

export type StepsProps = AbstractStepsProps & {};

export function Steps(props: StepsProps) {
  return <AbstractSteps {...props} />;
}
