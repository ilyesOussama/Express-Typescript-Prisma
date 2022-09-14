import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as TeamsService from "./teams.service";

export const teamsRouter = express.Router();

teamsRouter.get("/", async (request: Request, response: Response) => {
  try {
    const teams = await TeamsService.getTeams();
    return response.status(200).json(teams);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

teamsRouter.get("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const team = await TeamsService.getTeam(id);
    if (team) {
      return response.status(200).json(team);
    }
    return response.status(404).json("Team could not be found");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

teamsRouter.post(
  "/",
  body("name").isString(),
  body("goalsConsived").isInt(),
  body("chanceCreated").isInt(),
  body("standing").isInt(),
  body("goalsScored").isInt(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const team = request.body;
      const newTeam = await TeamsService.createTeam(team);
      return response.status(201).json(newTeam);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

teamsRouter.put(
  "/:id",
  body("name").isString(),
  body("goalsConsived").isInt(),
  body("chanceCreated").isInt(),
  body("standing").isInt(),
  body("goalsScored").isInt(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const team = request.body;
      const updatedTeam = await TeamsService.updateTeam(team, id);
      return response.status(200).json(updatedTeam);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

teamsRouter.delete("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    await TeamsService.deleteTeam(id);
    return response.status(204).json("Author has been successfully deleted");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
