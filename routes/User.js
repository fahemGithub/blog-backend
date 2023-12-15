import express from "express";
import { getAllUsers, singUp } from "../controllers/User.js";


const router = express.Router();

router.get('/', getAllUsers)

router.post('/singUp', singUp)

export default router