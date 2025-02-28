import { Translate } from "@/Domain/translate/Translate";
import { TranslateDrivers } from "@/Domain/translate/TranslateDrivers";

import { translateConfig } from "@/Infrastructure/translate/translateConfig";
import useTranslateSelector from "@/Infrastructure/translate/useTranslateSelector";

const useTranslate = (driver?: TranslateDrivers) => {
  const { selector } = useTranslateSelector();
  const translate: Translate = selector(driver || translateConfig.driver);

  const changeLanguage = (language: string) => {
    translate.changeLanguage(language);
  };

  const t = (key: string, interpolation?: Object): string => {
    return translate.t(key, interpolation);
  };

  return { t, changeLanguage };
};

export default useTranslate;
