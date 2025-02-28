import { AbstractPopconfirm, AbstractPopconfirmProps } from "@/Infrastructure/design-system";

export type PopconfirmProps = AbstractPopconfirmProps & {};

export function Popconfirm(props: PopconfirmProps) {
  return <AbstractPopconfirm {...props} />;
}
