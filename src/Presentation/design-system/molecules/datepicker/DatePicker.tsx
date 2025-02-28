import { AbstractDatePicker, AbstractDatePickerProps } from "@/Infrastructure/design-system";

export type DatePickerProps = AbstractDatePickerProps & {};

export function DatePicker(props: DatePickerProps) {
  return <AbstractDatePicker {...props} />;
}
