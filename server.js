const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/horoscope/:sign', async (req, res) => {
 try {
   const { sign } = req.params;
   const response = await axios.get(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`);
   res.json(response.data);
 } catch (error) {
   res.status(500).json({ error: error.toString() });
 }
});

app.get('/', (req, res) => {
    res.send('Server is running. This is the root URL')
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


