import express from "express";
import { createCommande, getCommandes } from "../controller/commande.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/", getCommandes);

router.post("/", createCommande);

export default router;
