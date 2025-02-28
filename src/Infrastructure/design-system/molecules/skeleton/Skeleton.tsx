import { Skeleton, SkeletonProps } from 'antd';

export type AbstractSkeletonProps = SkeletonProps & {};

export function AbstractSkeleton(props: AbstractSkeletonProps) {
    return <Skeleton {...props} />;
}
