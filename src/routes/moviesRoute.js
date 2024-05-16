import express from "express";
import { getMovies } from "../controller/movies.js";

const router = express.Router();

router.get("/", getMovies);

export default router;
