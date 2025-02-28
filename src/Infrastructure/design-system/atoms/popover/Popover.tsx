import { Popover, PopoverProps } from 'antd';

export type AbstractPopoverProps = PopoverProps & {};

export function AbstractPopover(props: AbstractPopoverProps) {
    return <Popover {...props} />;
}
