import express from "express"
import { getTask, postTask } from "../controllers/TaskController.js" 

const router = express.Router();

router.get('/', getTask)
router.post('/', postTask)


export default router