import React from "react";
import LeagueTable from "./standing";
import standingsData from "../academy.json"; // Import your JSON data
import Welcome from "./welcome";

const Page: React.FC = () => {
  return (
    <main>
      <Welcome />
      <div className="container mx-auto p-4 mt-8 pt-4 bg-gray-3003 grate flex flex-col gap justify-center items-center">
        <h1 className="text-2xl font-bold mb-1 text-blue-800 uppercase  grate">
          NLO Division One
        </h1>
        <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)] uppercase">
          Table
        </h3>
        <LeagueTable data={standingsData.rows} />
      </div>
    </main>
  );
};

export default Page;
