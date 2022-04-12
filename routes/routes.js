const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Index');
    res.render('index');
})

router.get('/about', (req, res) => {
    console.log('About');
    res.render('about');
})

router.get('/contact-me', (req, res) => {
    console.log('Contact me');
    res.render('contact-me');
})

router.get('*', (req, res) => {
    console.log('404');
    res.render('404');
})

module.exports = router;