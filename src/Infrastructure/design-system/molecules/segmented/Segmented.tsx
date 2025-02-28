import { Segmented, SegmentedProps } from 'antd';

export type AbstractSegmentedProps = SegmentedProps & {};

export function AbstractSegmented(props: AbstractSegmentedProps) {
    return <Segmented {...props} />;
}
