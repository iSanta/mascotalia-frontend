import { AbstractDescriptions, AbstractDescriptionsProps } from "@/Infrastructure/design-system";

export type DescriptionsProps = AbstractDescriptionsProps & {};

export function Descriptions(props: DescriptionsProps) {
  return <AbstractDescriptions {...props} />;
}
