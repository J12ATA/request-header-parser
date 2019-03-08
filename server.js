const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'));

app.get('/api/whoami', (req, res) => {
  const { 'accept-language': language, 'user-agent': software } = req.headers;
  res.json({ ipaddress: req.ip, language, software});
});

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});