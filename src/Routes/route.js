import express from "express";
import { addAccount, LoginAccount } from "../Controller/UserControl.js";



const route = express.Router();

route.post("/registration", addAccount);
route.post("/Userlogin", LoginAccount);



export default route;