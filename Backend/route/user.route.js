import Express  from "express";
import { login, signup } from "../Controller/user.controller.js";
// import userController from '../Controller/user.controller.js';

const router=Express.Router()

router.post("/signup",signup)
router.post("/login",login)

export default  router;