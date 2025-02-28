import { AbstractTimePicker, AbstractTimePickerProps } from "@/Infrastructure/design-system";

export type TimePickerProps = AbstractTimePickerProps & {};

export function TimePicker(props: TimePickerProps) {
  return <AbstractTimePicker {...props} />;
}
