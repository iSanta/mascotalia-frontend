import { Timeline, TimelineProps } from 'antd';

export type AbstractTimelineProps = TimelineProps & {};

export function AbstractTimeline(props: AbstractTimelineProps) {
    return <Timeline {...props} />;
}
