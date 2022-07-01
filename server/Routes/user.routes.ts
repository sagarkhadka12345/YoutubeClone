import express, { Router, Request, Response } from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.send("User Routes on");
});



export default router;
