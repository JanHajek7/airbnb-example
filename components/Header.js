import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm py-5 px-5 md:px-10">
      {/* LEFT */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500"
        />
        <SearchIcon className="h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className=" flex items-center space-x-2 border-2 h-6 rounded-full p-4">
          <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
          <UserCircleIcon className="h-6 cursor-pointer"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
}
