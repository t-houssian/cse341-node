const path = require('path');

const express = require("express");

const adminData = require('./users');

const router = express.Router();

router.get('/', (req, res, next) => {
    const users = adminData.users;
    console.log(users)
    res.render('home', {
        users: users,
        pageTitle: 'Home',
        path: '/',
        hasUsers: users.length > 0,
        activeShop: true,
        userCSS: true
    });
});

module.exports = router;