import { AbstractTag, AbstractTagProps } from "@/Infrastructure/design-system";

export type TagProps = AbstractTagProps & {};

export function Tag(props: TagProps) {
  return <AbstractTag {...props} />;
}
