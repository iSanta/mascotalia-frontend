import { AbstractTooltip, AbstractTooltipProps } from "@/Infrastructure/design-system";

export type TooltipProps = AbstractTooltipProps & {};

export function Tooltip(props: TooltipProps) {
  return <AbstractTooltip {...props} />;
}
