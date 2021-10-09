import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

export default function Search({ searchResults }) {
  const router = useRouter();
  const { endDate, location, numberOfQuests, startDate } = router.query;

  const formattedStartDate = format(new Date(startDate || null), "dd.MM.yyyy");
  const formattedEndDate = format(new Date(endDate || null), "dd.MM.yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Head>
        <title>Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        placeholder={`${location} | ${range} | ${numberOfQuests} quests`}
      ></Header>

      <main className="flex page-container">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfQuests} number of quests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {" "}
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex gap-2 text-gray-600 whitespace-nowrap">
            <p className="card-item">Cancellation Flexibility</p>
            <p className="card-item">Type of Place</p>
            <p className="card-item">Price</p>
            <p className="card-item">Rooms and Beds</p>
            <p className="card-item">More filters</p>
          </div>

          {searchResults?.map((item, index) => (
            <div key={index}>
              <InfoCard props={item} />
            </div>
          ))}
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
