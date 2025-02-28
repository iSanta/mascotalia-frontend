import { Tooltip, TooltipProps } from 'antd';

export type AbstractTooltipProps = TooltipProps & {};

export function AbstractTooltip(props: AbstractTooltipProps) {
    return <Tooltip {...props} />;
}
