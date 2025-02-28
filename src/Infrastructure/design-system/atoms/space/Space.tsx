import { Space, SpaceProps } from 'antd';

export type AbstractSpaceProps = SpaceProps & {};

export function AbstractSpace(props: AbstractSpaceProps) {
    return <Space {...props} />;
}
