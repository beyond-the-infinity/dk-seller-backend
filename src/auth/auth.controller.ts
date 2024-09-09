import express from 'express';

const router = express.Router();

router.use('/login');
router.use('/signup');

export const AuthController = router;
