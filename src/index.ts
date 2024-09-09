import { Express } from 'express';
import { createApplication } from './app';
import configuration from './configs/configuration';

const app: Express = createApplication();

app.listen(configuration.port, () =>
  console.log(`Running on ${configuration.port}`),
);
