import express, { json } from 'express';
import cron from 'node-cron';
import loadDataJob from './load-data-job';
import getCountries from './get-countries';
import getEcTopics from './get-ec-topics';

cron.schedule('* 5 * * *', loadDataJob);

const app = express();

app.use(json());
app.get('/api', (req, res) => res.json({ message: 'Welcome to curiexplore-paysage' }));
app.get('/api/paysage/:id', getCountries);
app.get('/api/paysage/:id', getEcTopics);

app.listen(3000, () => {
  loadDataJob();
  // eslint-disable-next-line no-console
  console.log('App is listening on port 3000');
});
