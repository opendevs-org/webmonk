const Todo = require('../models/todo.model');
const User = require('../models/user.model');
const { getQuote } = require('../utils/quoteGenerator');
const { sendEmail } = require('../utils/notification');

module.exports = {
    cronService: async () => {
        try {
            const quote = getQuote();
            const todos = await Todo.find({completed: false, createdAt: {$gt: new Date(new Date(Date.now()).setHours(00, 00, 00))}});
            const recipients = await User.find({});
            if (todos.length === 0) {
                const mailBody = `<h2>Congratulations</h2>, You are done for the day. <br>
                                    Keep up the same pace.<br>${quote.text} <br> --${quote.author}`;
                await sendEmail(recipients[0].email, 'Good work: Notification', mailBody);
            } else if (todos.length >= 0) {
                let listOfTasks = '';
                for (const iterator of todos) {
                    listOfTasks += `${iterator.title}<br>`
                }
                const mailBody = `<h2>Hey</h2>, You are still to do these task/tasks. <br>
                                    ${listOfTasks} <br><br> ${quote.text} <br> --${quote.author}`;
                await sendEmail(recipients[0].email, 'Yet to do: Notification', mailBody);
            }
        } catch (error) {
            console.error('cron-service.js', error);
        }
    },
};
