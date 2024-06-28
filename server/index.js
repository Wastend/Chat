

import express from 'express';
import Api from './api.js';

const myApi = new Api()

const app = express();

app.get('/api', async(req, res) => {
    const data = await myApi.getAllChanels()
  res.json(data);
});

app.listen(5001, () => {
  console.log('Server started on port 5001');
});