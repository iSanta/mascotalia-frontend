export type Translate = {
  t: (key: string, interpolation?: Object) => string;
  changeLanguage: (language: string) => void;
};
