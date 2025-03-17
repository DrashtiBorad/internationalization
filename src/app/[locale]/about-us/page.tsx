"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-2xl text-center p-4">AboutUs Page</h1>
      <h1 className="bg-blue-500 text-center">{t("title")}</h1>
    </div>
  );
};

export default AboutUs;
