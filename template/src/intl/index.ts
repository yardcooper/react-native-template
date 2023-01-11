import { MessageFormatElement } from 'react-intl';

export const translations: { [lang: string]: Record<string, string> } = {
  en: require('./locales/en.json'),
};

export const getCurrentTranslation: (
  language: string,
) =>
  | Record<string, string>
  | Record<string, MessageFormatElement[]>
  | undefined = (language) => {
  const DEFAULT_LANG = translations.en;
  const messages = translations[language] ?? DEFAULT_LANG;
  return messages;
};
