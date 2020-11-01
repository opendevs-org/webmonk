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
    }); //NOTE: sending the string and array to express render method so that it fills the portion of the ejs file and renders the complete HTML and sends to the browser in complete form
    //NOTE: as we are preparing the HTML file on backend using Express+EJS this is known as SSR
});


router.get('/about', (req, res) => {
    res.render('pages/about', {
        tagline: 'This is about page'
    });
})

module.exports = router;
