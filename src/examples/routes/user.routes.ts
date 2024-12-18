import { Router } from 'express';

import {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} from '../controllers/user.controller';

const router = Router();

// Rotas para o recurso "users"
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
