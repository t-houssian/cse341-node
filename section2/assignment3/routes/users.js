const path = require('path');

const express = require('express');

const router = express.Router();


router.get('/user-list', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});

module.exports = router;