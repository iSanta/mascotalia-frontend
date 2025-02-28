import { Row, RowProps } from 'antd';

export type AbstractRowProps = RowProps & {};

export function AbstractRow(props: AbstractRowProps) {
    return <Row {...props} />;
}
