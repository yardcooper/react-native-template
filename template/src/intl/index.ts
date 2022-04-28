import { MessageFormatElement } from 'react-intl';

export const translations: { [lang: string]: Record<string, string> } = {
  de: require('./locales/de.json'),
  en: require('./locales/en.json'),
};

export const getCurrentTranslation: (
  language: string,
) =>
  | Record<string, string>
  | Record<string, MessageFormatElement[]>
  | undefined = (language) => {
  const messages = translations[language] ?? translations.de;
  return messages;
};
