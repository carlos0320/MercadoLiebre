const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.listen(3000, () => {
    console.log('listening in port 3000');
})
