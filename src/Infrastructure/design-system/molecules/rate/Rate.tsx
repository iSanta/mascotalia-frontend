import { Rate, RateProps } from 'antd';

export type AbstractRateProps = RateProps & {};

export function AbstractRate(props: AbstractRateProps) {
    return <Rate {...props} />;
}
