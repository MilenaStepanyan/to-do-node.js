import express from "express";
import { createToDo ,deleteTask,editToDo,getToDos} from "../controllers/to-doController.js";
const router = express.Router();
router.post("/task", createToDo);
router.get("/getTask", getToDos);
router.put("/editTask/:id", editToDo);
router.delete("/deleteTask/:id", deleteTask);
export default router;
