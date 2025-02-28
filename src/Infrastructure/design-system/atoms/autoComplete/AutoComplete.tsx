import { AutoComplete, AutoCompleteProps } from 'antd';

export type AbstractAutoCompleteProps = AutoCompleteProps & {};

export function AbstractAutoComplete(props: AbstractAutoCompleteProps) {
    return <AutoComplete {...props} />;
}
