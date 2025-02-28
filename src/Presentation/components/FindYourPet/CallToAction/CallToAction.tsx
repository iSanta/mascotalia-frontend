import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Style from "./CallToAction.module.scss";

type Props = {
  onClick: () => void;
};

const CallToAction = ({ onClick }: Props) => {
  return (
    <div className={Style.callToAction} onClick={onClick}>
      <span className={Style.callToActionText}>¡Encuentra tu mascota ideal!</span>
    </div>
  );
};

export default CallToAction;
