import { Card, CardProps } from 'antd';

export type AbstractCardProps = CardProps & {};

export function AbstractCard(props: AbstractCardProps) {
    return <Card {...props} />;
}
