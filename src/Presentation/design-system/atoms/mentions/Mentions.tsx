import { AbstractMentions, AbstractMentionsProps } from "@/Infrastructure/design-system";

export type MentionsProps = AbstractMentionsProps & {};

export function Mentions(props: MentionsProps) {
  return <AbstractMentions {...props} />;
}
