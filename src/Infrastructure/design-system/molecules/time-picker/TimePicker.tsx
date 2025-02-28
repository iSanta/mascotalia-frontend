import { TimePicker, TimePickerProps } from 'antd';

export type AbstractTimePickerProps = TimePickerProps & {};

export function AbstractTimePicker(props: AbstractTimePickerProps) {
    return <TimePicker {...props} />;
}
