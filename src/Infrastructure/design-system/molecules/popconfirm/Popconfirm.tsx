import { Popconfirm, PopconfirmProps } from 'antd';

export type AbstractPopconfirmProps = PopconfirmProps & {};

export function AbstractPopconfirm(props: AbstractPopconfirmProps) {
    return <Popconfirm {...props} />;
}
