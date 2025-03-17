import type { Metadata } from "next";
import TranslationsProvider from "../../i18n/translationProvider";
import "../globals.css";
import initTranslations from "@/i18n";
import { nameSpaces } from "@/i18n/setting";
import LanguageSwitcher from "@/components/languageSwitcher";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next.js i18n Setup",
    description: "Internationalization in Next.js 15",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  try {
    const locale = (await params).locale;
    const { resources } = await initTranslations(locale, nameSpaces);

    return (
      <html lang={locale}>
        <body>
          <LanguageSwitcher />
          <TranslationsProvider
            locale={locale}
            namespaces={nameSpaces}
            resources={resources}>
            {children}
          </TranslationsProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error in RootLayout", error);
    throw error;
  }
}
