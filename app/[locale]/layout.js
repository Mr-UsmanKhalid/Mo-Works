import { notFound } from "next/navigation";
import Providers from "./providers";

const locales = ["en", "nl", "fr"];

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <Providers locale={locale} messages={messages}>
      {children}
    </Providers>
  );
}