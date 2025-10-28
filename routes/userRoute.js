import express from "express"
import { getUsers, postUser, auth } from "../controllers/UserController.js" 

const router = express.Router();

router.get('/', getUsers);
router.post('/', postUser);
router.post('/auth', auth);



export default router