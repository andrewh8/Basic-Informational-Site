const express = require('express');
const router = require('./routes/routes');
const app = express();
const routes = require('./routes/routes')
const PORT = 8080;

app.set('view engine', 'ejs');

app.use('', router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));