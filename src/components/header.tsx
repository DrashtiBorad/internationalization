import Image from "next/image";
import React from "react";
import LanguageSwitcher from "./languageSwitcher";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-gray-300 shadow-md z-50">
      <div className="container mx-auto">
        <div className="flex justify-between p-6">
          <Link href="/">
            <Image alt="image" src={"/file.svg"} height={140} width={50} />
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
