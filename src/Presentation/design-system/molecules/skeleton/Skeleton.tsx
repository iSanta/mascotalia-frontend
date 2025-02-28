import { AbstractSkeleton, AbstractSkeletonProps } from "@/Infrastructure/design-system";

export type SkeletonProps = AbstractSkeletonProps & {};

export function Skeleton(props: SkeletonProps) {
  return <AbstractSkeleton {...props} />;
}
