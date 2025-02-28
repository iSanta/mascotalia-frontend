import { Tag, TagProps } from 'antd';

export type AbstractTagProps = TagProps & {};

export function AbstractTag(props: AbstractTagProps) {
    return <Tag {...props} />;
}
