import express from 'express';
import { addUser, getAllUsers, getUser, updateUserData, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.patch('/:id', updateUserData);
router.delete('/:id', deleteUser);

export default router;