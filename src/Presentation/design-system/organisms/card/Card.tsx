import { AbstractCard, AbstractCardProps } from "@/Infrastructure/design-system";

export type CardProps = AbstractCardProps & {};

export function Card(props: CardProps) {
  return <AbstractCard {...props} />;
}
