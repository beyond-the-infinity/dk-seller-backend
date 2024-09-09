import express from 'express';
import configuration from './configs/configuration';

const app = express();

app.get('/', (req, res) => res.send('hi'));

app.listen(configuration.port, () =>
  console.log(`Running on ${configuration.port}`),
);
