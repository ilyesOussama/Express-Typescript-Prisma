import { db } from "../src/utils/db.server";

type Team = {
  name: string;
  standing: number;
  chanceCreated: number;
  /*   players: Player[];
  Fixtures:Fixtures; */
  goalsConsived: number;
  goalsScored: number;
};

type Player = {
  name: string;
  goalsScoared: number;
  assists: number;
  xg: number;
  xa: number;
  chanceCreated: number;
  minutesPlayed: number;
  form: number;
};

type Fixtures = {
  fixtures: Team[];
};

async function seed() {
  await Promise.all(
    getTeams().map((team) => {
      return db.team.create({
        data: {
          name: team.name,
          standing: team.standing,
          chanceCreated: team.chanceCreated,
          goalsConsived: team.goalsConsived,
          goalsScored: team.goalsScored,
        },
      });
    })
  );
  const team = await db.team.findFirst({
    where: {
      name: "Arsenal",
    },
  });

  await Promise.all(
    getPlayers().map((player) => {
      const {
        name,
        goalsScoared,
        assists,
        chanceCreated,
        minutesPlayed,
        xa,
        xg,
      } = player;
      return db.player.create({
        data: {
          name,
          goalsScoared,
          chanceCreated,
          assists,
          minutesPlayed,
          xa,
          xg,
          teamId: team.id,
        },
      });
    })
  );

  /* await Promise.all(
    getFixtures().map((fixture) => {
      const { fixtures } = fixture;
      return db.fixtures.create({
        data: {
          fixtures,
          teamId: team.id,
        },
      });
    })
  ); */
}

seed();

function getTeams(): Array<Team> {
  return [
    {
      name: "Arsenal",
      standing: 1,
      chanceCreated: 23,
      goalsConsived: 7,
      goalsScored: 14,
    },
    {
      name: "Man city",
      standing: 1,
      chanceCreated: 23,
      goalsConsived: 7,
      goalsScored: 14,
    },
    {
      name: "Man u",
      standing: 1,
      chanceCreated: 23,
      goalsConsived: 7,
      goalsScored: 14,
    },
  ];
}

function getPlayers(): Array<Player> {
  return [
    {
      name: "abc",
      goalsScoared: 6,
      assists: 3,
      xg: 5,
      xa: 5,
      chanceCreated: 10,
      form: 5,
      minutesPlayed: 750,
    },
    {
      name: "abc",
      goalsScoared: 6,
      assists: 3,
      xg: 5,
      xa: 5,
      chanceCreated: 10,
      form: 5,
      minutesPlayed: 750,
    },
    {
      name: "abc",
      goalsScoared: 6,
      assists: 3,
      xg: 5,
      xa: 5,
      chanceCreated: 10,
      form: 5,
      minutesPlayed: 750,
    },
    {
      name: "abc",
      goalsScoared: 6,
      assists: 3,
      xg: 5,
      xa: 5,
      chanceCreated: 10,
      form: 5,
      minutesPlayed: 750,
    },
    {
      name: "abc",
      goalsScoared: 6,
      assists: 3,
      xg: 5,
      xa: 5,
      chanceCreated: 10,
      form: 5,
      minutesPlayed: 750,
    },
    {
      name: "abc",
      goalsScoared: 6,
      assists: 3,
      xg: 5,
      xa: 5,
      chanceCreated: 10,
      form: 5,
      minutesPlayed: 750,
    },
  ];
}

function getFixtures(): Array<Fixtures> {
  return [
    {
      fixtures: [
        {
          name: "Arsenal",
          standing: 1,
          chanceCreated: 23,
          goalsConsived: 7,
          goalsScored: 14,
        },
      ],
    },
    {
      fixtures: [
        {
          name: "Arsenal",
          standing: 1,
          chanceCreated: 23,
          goalsConsived: 7,
          goalsScored: 14,
        },
      ],
    },
    {
      fixtures: [
        {
          name: "Arsenal",
          standing: 1,
          chanceCreated: 23,
          goalsConsived: 7,
          goalsScored: 14,
        },
      ],
    },
    {
      fixtures: [
        {
          name: "Arsenal",
          standing: 1,
          chanceCreated: 23,
          goalsConsived: 7,
          goalsScored: 14,
        },
      ],
    },
  ];
}
