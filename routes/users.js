import express from 'express';
import { addUser, createUser, deleteUser, getSpecificUser, getUser } from '../controllers/users.js';


const router = express.Router();


//all routes in here are starting with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getSpecificUser);

router.delete('/:id', deleteUser);

router.patch('/:id', addUser);

export default router;