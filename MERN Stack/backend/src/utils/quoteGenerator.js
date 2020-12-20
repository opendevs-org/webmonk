const Quote = require('inspirational-quotes');

module.exports = {
    getQuote: () => {
        try {
            return Quote.getQuote();
        } catch (error) {
            next(error);
        }
    },
};
