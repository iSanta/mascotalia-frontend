import { AbstractTransfer, AbstractTransferProps } from "@/Infrastructure/design-system";

export type TransferProps = AbstractTransferProps & {};

export function Transfer(props: TransferProps) {
  return <AbstractTransfer {...props} />;
}
