import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-large">Not sure where to go? Perfect.</p>
        <button className="rounded-full text-purple-500 bg-white px-10 py-4 shadow-md mt-2 hover:shadow-xl active:scale-90 transition-all duration-200 font-bold">
          I am here
        </button>
      </div>
    </div>
  );
}
