import { Switch, SwitchProps } from 'antd';

export type AbstractSwitchProps = SwitchProps & {};

export function AbstractSwitch(props: AbstractSwitchProps) {
    return <Switch {...props} />;
}
