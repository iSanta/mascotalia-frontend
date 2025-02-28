import { AbstractTimeline, AbstractTimelineProps } from "@/Infrastructure/design-system";

export type TimelineProps = AbstractTimelineProps & {};

export function Timeline(props: TimelineProps) {
  return <AbstractTimeline {...props} />;
}
