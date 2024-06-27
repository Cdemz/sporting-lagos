import React from "react";
import LeagueTable from "./standing";
import standingsData from "../academy.json"; // Import your JSON data
import Welcome from "./welcome";

const Page: React.FC = () => {
  return (
    <main>
      <Welcome />
      <div className="container mx-auto p-4 mt-8 grate flex flex-col gap justify-center items-center">
        <h1 className="text-2xl font-bold mb-2 text-blue-500 ">
          NLO Division One League
        </h1>
        <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
          Table
        </h3>
        <LeagueTable data={standingsData.rows} />
      </div>
    </main>
  );
};

export default Page;
