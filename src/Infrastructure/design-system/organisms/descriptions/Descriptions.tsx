import { Descriptions, DescriptionsProps } from 'antd';

export type AbstractDescriptionsProps = DescriptionsProps & {};

export function AbstractDescriptions(props: AbstractDescriptionsProps) {
    return <Descriptions {...props} />;
}
