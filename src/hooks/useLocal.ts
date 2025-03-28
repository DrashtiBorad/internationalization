import { defaultLNG, languages } from "@/i18n/setting";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const useChangeLocale = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();

  const currentLocale = i18n.language;

  const onLocaleChange = async (newLocale: languages) => {
    // Set cookie to persist the language
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Handle URL structure based on language
    let newPath = `/${newLocale}${currentPathname}`;
    if (currentLocale === defaultLNG || currentPathname === "/") {
      newPath = `/${newLocale}`;
    } else {
      newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }
    router.push(newPath);
    router.refresh();
  };

  return { currentLocale, onLocaleChange };
};

export default useChangeLocale;
