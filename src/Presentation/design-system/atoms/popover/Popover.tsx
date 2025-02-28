import { AbstractPopover, AbstractPopoverProps } from "@/Infrastructure/design-system";

export type PopoverProps = AbstractPopoverProps & {};

export function Popover(props: PopoverProps) {
  return <AbstractPopover {...props} />;
}
