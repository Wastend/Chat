import express from 'express';
import Api from './api.js';

const myApi = new Api()

const app = express();

app.use(express.json());

app.get('/all-chanels', async (req, res) => {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  const data = await myApi.getChanels(count, offset);

  res.json(data);
});

app.get('/chanels-count', async (req, res) => {

  const data = await myApi.getAllChanelsCount()
  res.json(data);
});

app.post('/auth', async (req, res) => {

  const data = await myApi.authHandle(req.body)
  data ?
    res.status(200).send('OK')
    :
    res.status(403).send('Forbidden')

});

app.post('/register', async (req, res) => {
  let data = false
  try {
    await myApi.registerHandle(req.body)
    data = true
  } catch (error) {
    data = false
  }
  data ?
    res.status(200).send('OK')
    :
    res.status(400).send('Forbidden');
});

app.listen(5001, () => {
  console.log('Server started on port 5001');
});