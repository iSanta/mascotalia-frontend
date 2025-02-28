import { AbstractBreadcrumb, AbstractBreadcrumbProps } from "@/Infrastructure/design-system";
import { HiChevronRight } from "react-icons/hi";
import Style from "./Breadcrumb.module.css";

export type BreadcrumbProps = AbstractBreadcrumbProps & {};

export function Breadcrumb(props: BreadcrumbProps) {
  const { separator } = props;

  return (
    <AbstractBreadcrumb
      {...props}
      separator={
        <div className={Style.breadcrumb__separator}>
          {separator ? separator : <HiChevronRight />}
        </div>
      }
    />
  );
}
