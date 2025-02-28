import { AbstractAutoComplete, AbstractAutoCompleteProps } from "@/Infrastructure/design-system";

export type AutoCompleteProps = AbstractAutoCompleteProps & {};

export function AutoComplete(props: AutoCompleteProps) {
  return <AbstractAutoComplete {...props} />;
}
