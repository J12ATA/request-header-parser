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

app.use((req, res, next) => { // catch 404 and forward to error handler
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => { // Error Handler
  res.status(err.status || 500);
  res.json({ error: { message: err.message } });
});

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});