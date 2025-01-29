import promisePool from "../pool/db.js";
import { STATUS_CODES } from "../utils/status-codes.js";

export const createToDo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ msg: "missing required fields" });
    }
    const [result] = await promisePool.query(
      `INSERT INTO tasks (title,description )VALUES (?,?)`,
      [title, description || ""]
    );
    return res
      .status(STATUS_CODES.CREATED)
      .json({ msg: "Created successfully", id: result.id });
  } catch (err) {
    console.log(err);
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ msg: "internal sever error" });
  }
};

export const getToDos = async (req, res) => {
  try {
    const [result] = await promisePool.query(`SELECT * FROM tasks`);
    if (result.length === 0) {
      return res.status(STATUS_CODES.NOT_FOUND).json({ msg: "No To do's" });
    }
    return res.status(STATUS_CODES.OK).json({ msg: "To-do list", result });
  } catch (err) {
    console.log(err);
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ msg: "internal server error" });
  }
};
