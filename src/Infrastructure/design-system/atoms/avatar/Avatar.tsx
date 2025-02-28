import { Avatar, AvatarProps } from 'antd';

export type AbstractAvatarProps = AvatarProps & {};

export function AbstractAvatar(props: AbstractAvatarProps) {
    return <Avatar {...props} />;
}
