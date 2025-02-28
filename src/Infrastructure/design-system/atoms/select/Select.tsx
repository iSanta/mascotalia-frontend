import { Select, SelectProps } from 'antd';

export type AbstractSelectProps = SelectProps & {};

export function AbstractSelect(props: AbstractSelectProps) {
    return <Select {...props} />;
}
