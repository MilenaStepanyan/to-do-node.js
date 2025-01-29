import express from "express";
import { createToDo ,getToDos} from "../controllers/to-doController.js";
const router = express.Router();
router.post("/task", createToDo);
router.post("/getTask", getToDos);
export default router;
