import { Router } from "express";
import movieRouter from "./moviesRoute.js";

const router = Router();

router.use("/", movieRouter);

export default router;
