const path = require('path');

const express = require('express');

const router = express.Router();

const users = [];


router.get('/add-users', (req, res, next) => {
    res.render('add-users', {
        pageTitle: 'Add Users',
        path: '/admin/add-users',
        formsCSS: true,
        userCSS: true,
        activeAddUser: true
    })
});

router.post('/add-users', (req, res, next) => {
    users.push({
        username: req.body.title
    });
    res.redirect('/');
});

exports.routes = router;
exports.users = users;