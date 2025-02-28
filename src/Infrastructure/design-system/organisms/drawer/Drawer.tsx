import { Drawer, DrawerProps } from 'antd';

export type AbstractDrawerProps = DrawerProps & {};

export function AbstractDrawer(props: AbstractDrawerProps) {
    return <Drawer {...props} />;
}
