import express, { Request, Response, NextFunction, Router } from "express";
import fs from "fs";
import cors from "cors";
import userRoutes from "./Routes/user.routes";
import videoRoutes from "./Routes/video.routes";

import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  morgan("common", {
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);

console.log("Hello world");
app.listen(9090, () => "Listening to Port 3000");

app.get("/ping", (req: Request, res: Response) => {
  res.send("API is running");
});
app.use("/api/user", userRoutes);
app.use("/api/video", videoRoutes);
