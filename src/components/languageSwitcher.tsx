"use client";

import useChangeLocale from "@/hooks/useLocal";
import { languages } from "@/i18n/setting";

const LanguageSwitcher = () => {
  const { currentLocale, onLocaleChange } = useChangeLocale();

  return (
    <div className="flex gap-2 m-4 justify-end">
      <button
        className={`p-[8px] rounded ${
          currentLocale === languages.EN ? "bg-blue-500" : "text-gray"
        }`}
        onClick={() => onLocaleChange(languages.EN)}>
        English
      </button>

      <div className="h-auto w-[1px] border-[#70767666] border-l" />

      <button
        className={`p-[8px] rounded ${
          currentLocale === languages.FR ? "bg-blue-500" : "text-gray"
        }`}
        onClick={() => onLocaleChange(languages.FR)}>
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
