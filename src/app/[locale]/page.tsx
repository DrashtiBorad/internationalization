"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="bg-green-300 text-center">{t("header")}</h1>
      <Link href={"/about-us"} className="text-xl border-b-2 m-3">
        About-us
      </Link>
    </div>
  );
}
