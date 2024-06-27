"use client";
import React, { useState } from "react";
import { TeamData } from "../utils/types"; // Define your types as needed

interface LeagueTableProps {
  data: TeamData[];
}

const LeagueTable: React.FC<LeagueTableProps> = ({ data }) => {
  const [showFullTable, setShowFullTable] = useState(false);

  // Filter the top 5 teams or all teams based on showFullTable state
  const displayedData = showFullTable ? data : data.slice(0, 5);

  return (
    <div className="overflow-x-auto grate">
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead className=" bg-gray-600">
          <tr className="bg-gray-100 border-b border-gray-200 text-black capitalize">
            <th className="text-left py-2 px-3">Pos</th>
            <th className="text-left py-2 px-3">Club</th>
            <th className="text-left py-2 px-3">P</th>
            <th className="text-left py-2 px-3">W</th>
            <th className="text-left py-2 px-3">D</th>
            <th className="text-left py-2 px-3">L</th>
            <th className="text-left py-2 px-3">Pts</th>
          </tr>
        </thead>
        <tbody className="font-extrabold">
          {displayedData.map((team, index) => (
            <tr
              key={team.team.id}
              className={`${
                team.team.name === "Sporting Lagos FA"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-black"
              }`}
            >
              <td className="py-2 px-3">{team.position}</td>
              <td className="py-2 px-3">{team.team.shortName}</td>
              <td className="py-2 px-3">{team.matches}</td>
              <td className="py-2 px-3">{team.wins}</td>
              <td className="py-2 px-3">{team.draws}</td>
              <td className="py-2 px-3">{team.losses}</td>
              <td className="py-2 px-3">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showFullTable && (
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
            onClick={() => setShowFullTable(true)}
          >
            View Full Table
          </button>
        </div>
      )}
    </div>
  );
};

export default LeagueTable;
