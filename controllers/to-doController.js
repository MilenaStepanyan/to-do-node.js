import promisePool from "../pool/db.js";
import { STATUS_CODES } from "../utils/status-codes.js";

export const createToDo = async(req, res) => {
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
    return res.status(STATUS_CODES.CREATED).json({msg:"Created successfully",id:result.id})
  } catch (err) {
    console.log(err);
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ msg: "internal sever error" });
  }
};
