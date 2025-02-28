import { DatePicker, DatePickerProps } from 'antd';

export type AbstractDatePickerProps = DatePickerProps & {};

export function AbstractDatePicker(props: AbstractDatePickerProps) {
    return <DatePicker {...props} />;
}
