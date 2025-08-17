import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { routing } from "../../i18n/routing";
import ClientProviders from "../ClientProviders";
import Footer from "./footer/page";
import type { Locale } from "../../i18n/types";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const cookieStore = cookies();
  const theme =
    ((await cookieStore).get("theme")?.value as "light" | "dark") || "light";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClientProviders initialTheme={theme}>
        {children}
        <Footer />
      </ClientProviders>
    </NextIntlClientProvider>
  );
}
