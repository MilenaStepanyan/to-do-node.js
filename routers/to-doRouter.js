import express from "express";
import { createToDo ,editToDo,getToDos} from "../controllers/to-doController.js";
const router = express.Router();
router.post("/task", createToDo);
router.get("/getTask", getToDos);
router.put("/editTask/:id", editToDo);
export default router;
