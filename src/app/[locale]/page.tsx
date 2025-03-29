"use client";
import { useGetCountriesQuery } from "@/graphql/getCountries";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { data: countryLists } = useGetCountriesQuery();
  console.log(countryLists?.countries, "datadatadatadata");

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="bg-green-300 text-center text-2xl font-bold p-4 rounded-md">
        {t("header")}
      </h1>
      <div className="my-4">
        <Link
          href="/about-us"
          className="text-blue-600 hover:underline text-lg">
          About Us
        </Link>
      </div>
      <div className="text-center mt-4">
        <Link
          href="/todos"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Go to Todos
        </Link>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="px-4 py-2 text-center">ID</th>
                <th className="px-4 py-2 text-center">Title</th>
              </tr>
            </thead>
            <tbody>
              {countryLists?.countries?.map((data) => (
                <tr key={data.name} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 text-center">{data.code}</td>
                  <td className="px-4 py-2 text-center">{data.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
