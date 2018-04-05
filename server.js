const express = require('express');
const { PORT } = require('./config/server-config');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.use('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

app.listen(PORT, () => console.log(`Starting application on port ${PORT}`));
