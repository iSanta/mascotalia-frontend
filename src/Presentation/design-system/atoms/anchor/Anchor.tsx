import { AbstractAnchorProps, AbstractAnchor } from '@/Infrastructure/design-system';

export type AnchorProps = AbstractAnchorProps & {};

export function Anchor(props: AbstractAnchorProps) {
    return <AbstractAnchor {...props} />;
}
