import { Layout, LayoutProps } from 'antd';

export type AbstractLayoutProps = LayoutProps & {};

export function AbstractLayout(props: AbstractLayoutProps) {
    return <Layout {...props} />;
}
