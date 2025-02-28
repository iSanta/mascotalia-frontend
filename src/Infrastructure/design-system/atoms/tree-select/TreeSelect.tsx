import { TreeSelect, TreeSelectProps } from 'antd';

export type AbstractTreeSelectProps = TreeSelectProps & {};

export function AbstractTreeSelect(props: AbstractTreeSelectProps) {
    return <TreeSelect {...props} />;
}
