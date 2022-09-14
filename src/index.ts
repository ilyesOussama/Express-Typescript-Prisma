import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { teamsRouter } from "./teams/teams.router";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/teams", teamsRouter);

app.get("/", (req, res) => {
  res.send("yo yo yo");
});

app.listen(PORT, () => console.log("Listening"));
