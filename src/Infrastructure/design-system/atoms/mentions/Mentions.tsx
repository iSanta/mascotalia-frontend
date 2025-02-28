import { Mentions, MentionsProps } from 'antd';

export type AbstractMentionsProps = MentionsProps & {};

export function AbstractMentions(props: AbstractMentionsProps) {
    return <Mentions {...props} />;
}
