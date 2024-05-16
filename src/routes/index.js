import { Router } from "express";
import movieRouter from "./moviesRoute.js";

const router = Router();

router.use("/movies", movieRouter);

export default router;
