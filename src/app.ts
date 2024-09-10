import express, { Express } from 'express';
import session from 'express-session';
import 'reflect-metadata';
import { AppPassport } from './auth/passport';
import configuration from './configs/configuration';
import { AppController } from './routes';

export function createApplication(): Express {
  const app: Express = express();

  // Body parser middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Session setup (for local strategy)
  app.use(
    session({
      secret: configuration.jwtSecret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  // Initialize passport for session and JWT
  app.use(AppPassport.initialize());
  app.use(AppPassport.session());

  app.use(AppController);

  return app;
}
