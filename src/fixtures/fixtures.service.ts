import type { Team } from "../teams/teams.service";

export type Fixtures = {
  id: number;
  fixtures: Team[];
};
