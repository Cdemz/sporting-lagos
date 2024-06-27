// interfaces.ts
export interface TeamData {
  team: {
    name: string;
    shortName: string;
    id: number;
    teamColors: {
      primary: string;
      secondary: string;
      text: string;
    };
  };
  position: number;
  matches: number;
  wins: number;
  scoresFor: number;
  scoresAgainst: number;
  losses: number;
  draws: number;
  points: number;
  id: number;
}
