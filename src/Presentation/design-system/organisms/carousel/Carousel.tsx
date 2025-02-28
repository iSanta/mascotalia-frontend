import { AbstractCarousel, AbstractCarouselProps } from "@/Infrastructure/design-system";

export type CarouselProps = AbstractCarouselProps & {};

export function Carousel(props: CarouselProps) {
  return <AbstractCarousel {...props} />;
}
