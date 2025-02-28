import { Tabs, TabsProps } from 'antd';

export type AbstractTabsProps = TabsProps & {};

export function AbstractTabs(props: AbstractTabsProps) {
    return <Tabs {...props} />;
}
