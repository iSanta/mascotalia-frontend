import { AbstractSpace, AbstractSpaceProps } from "@/Infrastructure/design-system";

export type SpaceProps = AbstractSpaceProps & {};

export function Space(props: SpaceProps) {
  return <AbstractSpace {...props} />;
}
