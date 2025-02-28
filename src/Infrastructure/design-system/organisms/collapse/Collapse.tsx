import { Collapse, CollapseProps } from 'antd';

export type AbstractCollapseProps = CollapseProps & {};

export function AbstractCollapse(props: AbstractCollapseProps) {
    return <Collapse {...props} />;
}
