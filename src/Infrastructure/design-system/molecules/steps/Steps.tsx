import { Steps, StepsProps } from 'antd';

export type AbstractStepsProps = StepsProps & {};

export function AbstractSteps(props: AbstractStepsProps) {
    return <Steps {...props} />;
}
