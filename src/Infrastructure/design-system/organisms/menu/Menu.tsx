import { Menu, MenuProps } from 'antd';

export type AbstractMenuProps = MenuProps & {};

export function AbstractMenu(props: AbstractMenuProps) {
    return <Menu {...props} />;
}
