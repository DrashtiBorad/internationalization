import { createInstance, i18n, Resource } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { ALLNameSpaces, AllTranslation, defaultNS, locales } from "./setting";

export default async function initTranslations(
  locale: string,
  namespaces: ALLNameSpaces[],
  i18nInstance?: i18n,
  resources?: Resource
) {
  i18nInstance = i18nInstance || createInstance();
  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string[]) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    defaultNS,
    supportedLngs: locales,
    ns: namespaces,
    fallbackNS: AllTranslation,
    preload: resources ? [] : locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
