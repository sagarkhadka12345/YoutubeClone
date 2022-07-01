import express, { Router, Request, Response } from "express";

const router = express.Router();

router.get("/ping", (req: Request, res: Response) => {
  res.send("Video Routes on");
});

router.get("/create", (req: Request, res: Response) => {
  res.send("video");
});

export default router;
