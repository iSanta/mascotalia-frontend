import { AbstractStatistic, AbstractStatisticProps } from "@/Infrastructure/design-system";

export type StatisticProps = AbstractStatisticProps & {};

export function Statistic(props: StatisticProps) {
  return <AbstractStatistic {...props} />;
}
