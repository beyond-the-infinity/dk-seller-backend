import dotenv from 'dotenv';
dotenv.config();

export default {
  port: parseInt(process.env.PORT || '3000'),
  jwtSecret: process.env.JWT_SECRET || 'jwt_secret',
};
