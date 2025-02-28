import { Progress, ProgressProps } from 'antd';

export type AbstractProgressProps = ProgressProps & {};

export function AbstractProgress(props: AbstractProgressProps) {
    return <Progress {...props} />;
}
