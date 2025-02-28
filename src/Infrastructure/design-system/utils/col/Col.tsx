import { Col, ColProps } from 'antd';

export type AbstractColProps = ColProps & {};

export function AbstractCol(props: AbstractColProps) {
    return <Col {...props} />;
}
