import promisePool from "../pool/db.js";
import { STATUS_CODES } from "../utils/status-codes.js";

export const createToDo = (req,res)=>{
    try{
        const {title} = req.body
        if(!title){
            return res.status(STATUS_CODES.BAD_REQUEST).json({msg:"missing required fields"})
        }
    }catch(err){
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({msg:"internal sever error"})
    }
}