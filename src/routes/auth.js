import express from "express";
import { signin, signup } from "../controller/auth.js";
import { body } from "express-validator";

// import { body } from 'express-validator';

const router = express.Router();

router.post("/signin", [body("email").isEmail()], signin);
router.post("/signup", [body("email").trim().isEmail(), body("password").trim().isStrongPassword()], signup);

export default router;
