/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const api = require('./api');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
// app.get('/:id', (req, res) => {
//     res.sendFile(path.resolve('public', 'profile.html'));
// });
// app.use('/:id', api);
app.use('/', api);

app.listen(port, () => console.log(`server listening on port:${port}`));
