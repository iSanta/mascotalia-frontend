import { AbstractAvatar, AbstractAvatarProps } from "@/Infrastructure/design-system";

export type AvatarProps = AbstractAvatarProps & {};

export function Avatar(props: AvatarProps) {
  return <AbstractAvatar {...props} />;
}
