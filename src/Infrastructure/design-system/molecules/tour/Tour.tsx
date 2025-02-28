import { Tour, TourProps } from 'antd';

export type AbstractTourProps = TourProps & {};

export function AbstractTour(props: AbstractTourProps) {
    return <Tour {...props} />;
}
