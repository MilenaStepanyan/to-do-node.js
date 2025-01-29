import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool();
