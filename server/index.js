import express from 'express';
import Api from './api.js';

const myApi = new Api()

const app = express();

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

app.listen(5001, () => {
  console.log('Server started on port 5001');
});