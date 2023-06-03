import express from 'express';
import { addUser, getAllUsers, getUser } from '../controllers/user.js';

const router = express.Router();

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);

export default router;