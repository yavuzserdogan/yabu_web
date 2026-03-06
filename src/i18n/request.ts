import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = locale === "tr"
    ? (await import(`../messages/tr/index`)).default
    : (await import(`../messages/en/index`)).default;

  return {
    locale,
    messages,
  };
});