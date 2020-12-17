const Quote = require('inspirational-quotes');

module.exports = {
    getQuote: () => {
        try {
            return Quote.getQuote(); // will return an object
        } catch (error) {
            next(error);
        }
    },
};
