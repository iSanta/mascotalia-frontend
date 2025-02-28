import { Anchor, AnchorProps } from 'antd';

export type AbstractAnchorProps = AnchorProps & {};

export function AbstractAnchor(props: AbstractAnchorProps) {
    return <Anchor {...props} />;
}
