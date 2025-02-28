import { Checkbox, CheckboxProps } from 'antd';

export type AbstractCheckboxProps = CheckboxProps & {};

export function AbstractCheckbox(props: AbstractCheckboxProps) {
    return <Checkbox {...props} />;
}
