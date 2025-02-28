import { Result, ResultProps } from 'antd';

export type AbstractResultProps = ResultProps & {};

export function AbstractResult(props: AbstractResultProps) {
    return <Result {...props} />;
}
