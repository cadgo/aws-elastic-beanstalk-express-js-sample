const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World Carlos Diaz!'));

app.listen(port);
console.log(`I'am Carlos Diaz://localhost:${port}`);
