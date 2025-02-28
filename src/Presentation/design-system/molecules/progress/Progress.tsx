import { AbstractProgress, AbstractProgressProps } from "@/Infrastructure/design-system";

export type ProgressProps = AbstractProgressProps & {};

export function Progress(props: ProgressProps) {
  return <AbstractProgress {...props} />;
}
