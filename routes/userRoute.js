import express from "express"
import { getUsers, postUser } from "../controllers/UserController.js" 

const router = express.Router();

router.get('/', getUsers)
router.post('/', postUser)


export default router