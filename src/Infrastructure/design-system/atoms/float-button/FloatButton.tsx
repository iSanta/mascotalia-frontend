import { FloatButton, FloatButtonProps } from 'antd';

export type AbstractFloatButtonProps = FloatButtonProps & {};

export function AbstractFloatButton(props: AbstractFloatButtonProps) {
    return <FloatButton {...props} />;
}
