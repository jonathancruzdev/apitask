import express from "express"
import { getTask, postTask, getTaskById } from "../controllers/TaskController.js" 

const router = express.Router();

router.get('/', getTask);
router.get('/:id', getTaskById);
router.post('/', postTask);


export default router