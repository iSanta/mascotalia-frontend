import { Breadcrumb, BreadcrumbProps } from 'antd';

export type AbstractBreadcrumbProps = BreadcrumbProps & {};

export function AbstractBreadcrumb(props: AbstractBreadcrumbProps) {
    return <Breadcrumb {...props} />;
}
