// app.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/cryptocurrency/', async (req, res) => {
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  const options = {
    method: 'GET',
    headers: {
      'X-CMC_PRO_API_KEY': 'b861a916-55d9-4b48-ae1c-3e76e2c478f0', 
    },
  };

  try {
    const apiRes = await fetch(url, options);
    const data = await apiRes.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});