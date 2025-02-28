import { TranslateDrivers } from "@/Domain/translate/TranslateDrivers";
import useIeighteenNext from "@/Infrastructure/translate/ieighteenNext/useIeighteenNext";
import { Translate } from "@/Domain/translate/Translate";

const useTranslateSelector = () => {
  const { changeLanguage: i18changeLanguage, t: i18t } = useIeighteenNext();

  const selector = (key: TranslateDrivers): Translate => {
    switch (key) {
      case "i18next":
        return {
          changeLanguage: i18changeLanguage,
          t: i18t,
        };

      default:
        break;
    }
  };
  return { selector };
};

export default useTranslateSelector;
