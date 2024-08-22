import Express  from "express";
import { getBook } from "../Controller/Book.controller.js";

const router=Express.Router()

router.get("/",getBook);

export default router;