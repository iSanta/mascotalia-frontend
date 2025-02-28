import { Empty, EmptyProps } from 'antd';

export type AbstractEmptyProps = EmptyProps & {};

export function AbstractEmpty(props: AbstractEmptyProps) {
    return <Empty {...props} />;
}
