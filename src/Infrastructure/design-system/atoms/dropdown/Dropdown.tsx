import { Dropdown, DropdownProps } from 'antd';

export type AbstractDropdownProps = DropdownProps & {};

export function AbstractDropdown(props: AbstractDropdownProps) {
    return <Dropdown {...props} />;
}
