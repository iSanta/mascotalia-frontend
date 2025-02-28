import { Carousel, CarouselProps } from 'antd';

export type AbstractCarouselProps = CarouselProps & {};

export function AbstractCarousel(props: AbstractCarouselProps) {
    return <Carousel {...props} />;
}
