import { AbstractModal, AbstractModalProps } from "@/Infrastructure/design-system";

export type ModalProps = AbstractModalProps & {};

export function Modal(props: ModalProps) {
  return <AbstractModal {...props} />;
}
