import express from "express";
import taskRouter from "./routers/to-doRouter.js"
import cors from "cors";
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use("/create",taskRouter)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
