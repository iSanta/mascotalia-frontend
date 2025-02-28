import { Divider, DividerProps } from 'antd';

export type AbstractDividerProps = DividerProps & {};

export function AbstractDivider(props: AbstractDividerProps) {
    return <Divider {...props} />;
}
