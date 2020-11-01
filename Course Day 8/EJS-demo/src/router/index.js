const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    const tagline = 'This is rendered from Express backend';

    const people = [
        { name: 'TechBairn', place: 'Banglore' },
        { name: 'opendevs', place: 'Banglore' },
        { name: 'Alok', place: 'Banglore' }
    ]

    res.render('pages/index', {
        tagline,
        people
    });
});


router.get('/about', (req, res) => {
    res.render('pages/about', {
        tagline: 'This is about page'
    });
})

module.exports = router;
