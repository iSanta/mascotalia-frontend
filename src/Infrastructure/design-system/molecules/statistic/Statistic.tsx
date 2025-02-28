import { Statistic, StatisticProps } from 'antd';

export type AbstractStatisticProps = StatisticProps & {};

export function AbstractStatistic(props: AbstractStatisticProps) {
    return <Statistic {...props} />;
}
