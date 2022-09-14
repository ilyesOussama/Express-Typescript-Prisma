import type { Team } from "../teams/teams.service";

export type Player = {
  id: number;
  name: string;
  goalsScoared: number;
  assists: number;
  xg: number;
  xa: number;
  chanceCreated: number;
  minutesPlayed: number;
  team: Team;
  form: number;
};
