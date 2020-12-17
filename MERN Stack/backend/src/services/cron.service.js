const Todo = require('../models/todo.model');
const User = require('../models/user.model');
const { getQuote } = require('../utils/quoteGenerator');
const { sendEmail } = require('../utils/notification');

module.exports = {
    cronService: async () => {
        try {
            // const quote = getQuote();
            // const mailBody = `<h1>Test Body</h1> <br> ${quote.text} <br> --${quote.author}`;
            // await sendEmail('opendevs@gmail.com', 'Test Subject', mailBody);
            // TODO: to fetch only today's todo
            const todos = await Todo.find({todoCompleted: false});
            const recipients = await User.find({});

            if (todos.length === 0) {
                // TODO: Congratulations Email
                // TODO: call getQuote and generate a body; genQuote returns Object
                // arguments: to, subject, body<html>
                // await sendEmail(recipients[0].email, 'Test Subject', 'Test Body');
            } else if (todos.length >= 0) {
                // TODO: Send Task List Email
                // TODO: call getQuote and generate a body; genQuote returns Object
                // arguments: to, subject, body<html>
                // await sendEmail(recipients[0].email, 'Test Subject', 'Test Body');
            }
        } catch (error) {
            console.error('cron-service.js', error);
        }
    },
};
