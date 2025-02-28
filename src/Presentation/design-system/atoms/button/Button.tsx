import { CSSProperties } from "react";
import { AbstractButton, AbstractButtonProps } from "@/Infrastructure/design-system";

export type ButtonProps = AbstractButtonProps & {
  buttontype?: Buttontype;
};

type Buttontype = "gradient" | "selected";

export function Button(props: ButtonProps) {
  const { buttontype } = props;

  const selectedButton: CSSProperties = {
    ...props.style,
    background: "#673F6922",
    color: "#673F69",
    border: "2px solid #673F69",
  };

  const gradientStyles: CSSProperties = {
    ...props.style,
    background: "linear-gradient(45deg, rgba(255,175,69,1) 0%, rgba(251,109,72,1) 100%)",
    border: "none",
    color: "#673F69",
  };

  let style = {};

  switch (buttontype) {
    case "gradient":
      style = gradientStyles;
      break;
    case "selected":
      style = selectedButton;
      break;
    default:
      style = props.style;
      break;
  }

  return <AbstractButton {...props} style={style} />;
}
