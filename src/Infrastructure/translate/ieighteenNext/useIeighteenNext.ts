import { useTranslation } from "react-i18next";
import { Translate } from "@/Domain/translate/Translate";
import "./index";

const useIeighteenNext = (): Translate => {
  const { t: translator, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const t = (key: string, interpolation?: undefined): string => {
    return translator(key, interpolation);
  }

  return { t, changeLanguage };
};

export default useIeighteenNext;
