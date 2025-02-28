import { Button, Typography } from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { useState } from "react";

type LabelButtonProps = {
  data: {
    id: string;
    text: string;
    callback?: Function;
  };
};

const LabelButton = ({ data }: LabelButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Button
      size="middle"
      className={`${Utils.text_bold_md}`}
      onClick={() => {
        data.callback && data.callback();
        setIsSelected(!isSelected);
      }}
      buttontype={isSelected ? "selected" : undefined}
    >
      <Typography.Text>{data.text}</Typography.Text>
    </Button>
  );
};

export default LabelButton;
