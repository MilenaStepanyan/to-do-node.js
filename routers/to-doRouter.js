import express from "express";
import { createToDo } from "../controllers/to-doController.js";
const router = express.Router();
router.post("/task", createToDo);
export default router;
