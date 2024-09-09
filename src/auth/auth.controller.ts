import express from 'express';

const router = express.Router();

router.post('/login');
router.get('/signup');

export const AuthController = router;
