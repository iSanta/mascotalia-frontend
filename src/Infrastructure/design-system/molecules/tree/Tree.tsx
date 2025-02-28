import { Tree, TreeProps } from 'antd';

export type AbstractTreeProps = TreeProps & {};

export function AbstractTree(props: AbstractTreeProps) {
    return <Tree {...props} />;
}
