import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // Bu kısım locale'in string olarak gelmesini bekliyor
  let locale = await requestLocale;

  // Eğer gelen dil desteklenenler arasında yoksa varsayılanı kullan
  // "as any" diyerek TypeScript'i susturuyoruz çünkü routing.locales const array
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Dosya yoluna dikkat: request.ts "src/i18n" içinde, messages ise "src/messages" içinde.
    // Yani bir üst klasöre çıkıp (..) messages'a giriyoruz.
    messages: (await import(`../messages/${locale}.json`)).default
  };
});