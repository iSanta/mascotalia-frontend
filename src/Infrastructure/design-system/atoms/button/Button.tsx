import { Button, ButtonProps } from 'antd';

export type AbstractButtonProps = ButtonProps & {};

export function AbstractButton(props: AbstractButtonProps) {
    return <Button {...props} />;
}
