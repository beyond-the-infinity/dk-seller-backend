import express from 'express';
import { AuthController } from './auth/auth.controller';
const router = express.Router();

router.get('/test', (req, res) => res.send('hi'));
router.use('/auth', AuthController);

export const AppController = router;
