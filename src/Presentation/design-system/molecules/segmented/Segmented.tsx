import { AbstractSegmented, AbstractSegmentedProps } from "@/Infrastructure/design-system";

export type SegmentedProps = AbstractSegmentedProps & {};

export function Segmented(props: SegmentedProps) {
  return <AbstractSegmented {...props} />;
}
