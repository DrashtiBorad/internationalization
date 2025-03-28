import type { Metadata } from "next";
import TranslationsProvider from "../../i18n/translationProvider";
import "../globals.css";
import initTranslations from "@/i18n";
import { locales, nameSpaces } from "@/i18n/setting";
import Header from "@/components/header";
import { QueryClientProviders } from "@/provider/clientProvider";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Next.js i18n Setup",
    description: "Internationalization in Next.js 15",
  };
}
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  try {
    const locale = (await params).locale;
    const { resources } = await initTranslations(locale, nameSpaces);

    return (
      <html lang={locale}>
        <body className="min-h-screen">
          <QueryClientProviders>
            <TranslationsProvider
              locale={locale}
              namespaces={nameSpaces}
              resources={resources}>
              <Header />
              {children}
            </TranslationsProvider>
          </QueryClientProviders>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error in RootLayout", error);
    throw error;
  }
}
