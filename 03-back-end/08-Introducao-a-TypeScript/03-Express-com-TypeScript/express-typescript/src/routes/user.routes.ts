import { Router } from 'express';

import userController from '../controllers/user.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = Router();
router.get('/users', userController.getAll);
router.post('/users', authMiddleware, userController.login);

export default router;