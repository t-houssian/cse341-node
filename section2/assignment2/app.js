const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('users middleware');
    res.send('<p>The Middleware for users</p>');
});

app.use('/', (req, res, next) => {
    console.log('default middleware');
    res.send('<p>Hello from Express</p>');
});

app.listen(3000);