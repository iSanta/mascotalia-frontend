import { Radio, RadioProps } from 'antd';

export type AbstractRadioProps = RadioProps & {};

export function AbstractRadio(props: AbstractRadioProps) {
    return <Radio {...props} />;
}
