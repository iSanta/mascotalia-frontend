import { AbstractAlert, AbstractAlertProps } from "@/Infrastructure/design-system";

export type AlertProps = AbstractAlertProps & {};

export function Alert(props: AlertProps) {
  return <AbstractAlert {...props} />;
}
