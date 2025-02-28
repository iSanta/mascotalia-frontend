import { Spin, SpinProps } from 'antd';

export type AbstractSpinProps = SpinProps & {};

export function AbstractSpin(props: AbstractSpinProps) {
    return <Spin {...props} />;
}
