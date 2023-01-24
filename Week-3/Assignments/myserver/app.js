const express = require('express');
const bodyParser = require('body-parser');
const cookieParser  = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

//Assignment-1

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

//Assignment-2

app.get('/data', (req, res) => {
    let xyz = req.query.number;
    if (!xyz) {
        res.send('Lack of Parameter');
    } else if (xyz==='5') {
        let sumfive = 1 + 2 + 3 + 4 + 5;
        res.send(`${sumfive}`);
    } else if (Number.isInteger(Number(xyz)) && Number(xyz)>0) {
        let sumN = (1 + Number(xyz))*Number(xyz)/2;
        res.send(`${sumN}`);
    } else {
        res.send('Wrong Parameter');
    }   
});

//Assignment-3

app.get('/ajax', (req, res) => {
    res.send('Please enetr a number.');
});

app.post('/ajax', (req, res) => {
    res.send(req.body.number);
});


//Assignment-4

app.get('/myName', (req, res) => {
    res.render('myName', {name: req.cookies.username});
});

app.post('/myName', (req, res) => {
    res.cookie('username', req.body.username);
    const name = req.cookies.username
    res.redirect(`/trackName?name=${name}`);
});


app.get('/trackName', (req, res) => {
    const name = req.cookies.username;
    if (name === req.query.name){
        res.redirect('/myName');
    }
});

app.listen(3000);
