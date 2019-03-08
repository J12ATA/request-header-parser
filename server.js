// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('view engine', 'pug');

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => res.render('index'));

// your first API endpoint... 
app.get('/api/hello', (req, res) => {
  res.json({greeting: 'hello API'});
});

app.get('/api/whoami', (req, res) => {
  const { 'accept-language': language, 'user-agent': software } = req.headers;
  res.json({ ipaddress: req.ip, language, software});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
