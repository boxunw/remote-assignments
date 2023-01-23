const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
})

app.get('/data', (req, res) => {
    res.send('Lack of Parameter');
})

app.listen(3000);
//aaa