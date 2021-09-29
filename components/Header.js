import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/server/router";

export default function Header({ placeholder }) {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfQuests, setNumberOfQuests] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchValue("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfQuests: numberOfQuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm py-5 px-5 md:px-10">
      {/* LEFT */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
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
      {searchValue && (
        <div className="flex flex-col col-span-3 mx-auto my-10">
          {" "}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex flex-row items-center border-b pb-1">
            <h2 className="font-semibold text-2xl pl-2 flex-grow  border-b-1">
              Number of quests
            </h2>
            <UsersIcon className="h-5"></UsersIcon>
            <input
              value={numberOfQuests}
              onChange={({ target: { value } }) => setNumberOfQuests(value)}
              type="number"
              min="1"
              max="10"
              className="w-12 pl-2 text-lg outline-none text-red-500"
            />
          </div>
          <div className="flex mt-2">
            <button
              className="flex-grow h-10 text-gray-500"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className="flex-grow h-10 text-red-500"
              onClick={() => search()}
            >
              {" "}
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
