import { AbstractBadge, AbstractBadgeProps } from "@/Infrastructure/design-system";

export type BadgeProps = AbstractBadgeProps & {};

export function Badge(props: BadgeProps) {
  return <AbstractBadge {...props} />;
}
