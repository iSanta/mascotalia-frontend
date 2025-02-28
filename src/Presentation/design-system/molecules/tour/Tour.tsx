import { AbstractTour, AbstractTourProps } from "@/Infrastructure/design-system";

export type TourProps = AbstractTourProps & {};

export function Tour(props: TourProps) {
  return <AbstractTour {...props} />;
}
