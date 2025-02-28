import { InputNumber, InputNumberProps } from 'antd';

export type AbstractInputNumberProps = InputNumberProps & {};

export function AbstractInputNumber(props: AbstractInputNumberProps) {
    return <InputNumber {...props} />;
}
