const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const PORT = 3000;

app.use(require('cors')());

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
})