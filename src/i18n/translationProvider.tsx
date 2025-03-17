"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "../i18n/index";
import { createInstance, Resource } from "i18next";
import React from "react";
import { ALLNameSpaces } from "./setting";

export default function TranslationsProvider({
  children,
  locale = "en",
  namespaces = [ALLNameSpaces.COMMON],
  resources,
}: {
  children?: React.ReactNode;
  locale?: string;
  namespaces: ALLNameSpaces[];
  resources?: Resource;
}) {
  const i18n = createInstance();
  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
