
import express from "express";
import additionNumbers  from "./controller/addcontroller.js"

const router = express.Router();

router.post('/input',additionNumbers);
export default router