"use client";

import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";
import { Button } from "../atomes/button";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { SearchBar } from "../molecules/Searchbar";
import { Navigation } from "./Navigation/Navigation";

export const Header: React.FC = () => {
  return (
    <header className="mt-4">
      <div className="flex justify-between items-center container">
        <div className="flex justify-between items-center gap-2 w-[20%] md:w-[40%]">
          <IoMenuOutline className="text-3xl md:hidden cursor-pointer" />

          {/* logo */}
          <Image
            src="/images/p-logo.jpg"
            width={75}
            height={50}
            alt="logo"
            className="rounded-full cursor-pointer bg-white"
          />
          <SearchBar />
        </div>

        <div className="flex justify-between items-center w-[40%] md:w-[10%]">
          <CiSearch className="text-3xl cursor-pointer md:hidden" />
          <Button size="normal" isOutline variant="accent" className="p-2">
            <SlLogin className="text-3xl" />
            ورود
          </Button>
          <RiShoppingCartLine className="text-2xl cursor-pointer" />
        </div>
      </div>
      <Navigation />
    </header>
  );
};
