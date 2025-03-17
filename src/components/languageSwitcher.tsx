"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales } from "@/i18n/setting";

const LanguageSwitcher = () => {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="flex gap-2 m-4 justify-end">
      {locales.map((lang) => {
        return (
          <Link
            key={lang}
            href={`/${lang}${pathname.replace(`/${currentLocale}`, "")}`}>
            <button
              className={`px-4 py-2 rounded ${
                lang === currentLocale
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}>
              {lang.toUpperCase()}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
