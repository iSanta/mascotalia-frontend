import { Badge, BadgeProps } from 'antd';

export type AbstractBadgeProps = BadgeProps & {};

export function AbstractBadge(props: AbstractBadgeProps) {
    return <Badge {...props} />;
}
