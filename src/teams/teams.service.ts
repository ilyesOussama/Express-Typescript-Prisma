import { db } from "../utils/db.server";

import type { Player } from "../players/players.service";
import type { Fixtures } from "../fixtures/fixtures.service";

export type Team = {
  id: number;
  goalsConsived: number;
  chanceCreated: number;
  /*   players: Player[];
  Fixtures: Fixtures[]; */
  name: string;
  standing: number;
  goalsScored: number;
};

export const getTeams = async (): Promise<Team[]> => {
  return db.team.findMany({
    select: {
      id: true,
      goalsConsived: true,
      chanceCreated: true,
      players: true,
      Fixtures: true,
      name: true,
      standing: true,
      goalsScored: true,
    },
  });
};

export const getTeam = async (id: number): Promise<Team | null> => {
  return db.team.findUnique({
    where: {
      id,
    },
  });
};

export const createTeam = async (team: Omit<Team, "id">): Promise<Team> => {
  const {
    name,
    standing,
    goalsScored,
    goalsConsived,
    chanceCreated,
    /*     players,
    Fixtures */
  } = team;
  return db.team.create({
    data: {
      goalsConsived,
      chanceCreated,
      /*       players,
      Fixtures, */
      name,
      standing,
      goalsScored,
    },
    select: {
      id: true,
      goalsConsived: true,
      chanceCreated: true,
      players: true,
      Fixtures: true,
      name: true,
      standing: true,
      goalsScored: true,
    },
  });
};

export const updateTeam = async (
  team: Omit<Team, "id">,
  id: number
): Promise<Team> => {
  const {
    /* id, */
    goalsConsived,
    chanceCreated,
    /*     players,
    Fixtures, */
    name,
    standing,
    goalsScored,
  } = team;
  return db.team.update({
    where: {
      id,
    },
    data: {
      id,
      goalsConsived,
      chanceCreated,
      /*       players,
      Fixtures, */
      name,
      standing,
      goalsScored,
    },
    select: {
      id: true,
      goalsConsived: true,
      chanceCreated: true,
      players: true,
      Fixtures: true,
      name: true,
      standing: true,
      goalsScored: true,
    },
  });
};

export const deleteTeam = async (id: number): Promise<void> => {
  await db.team.delete({
    where: {
      id,
    },
  });
};
