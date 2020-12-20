const nodemailer = require("nodemailer");

module.exports = {
    sendEmail: async (to, subject, body) => {
        try {
            // Need to install maildev globally: npm i -g maildev
            let transporter = nodemailer.createTransport({
                host: 'localhost',
                port: 1025,
                ignoreTLS: true,
                secure: false,
                // auth: {
                //     user: testAccount.user, // generated ethereal user
                //     pass: testAccount.pass, // generated ethereal password
                // },
            });
            await transporter.sendMail({
                from: '"Todo Notification 👻" <todo@notification.com>', // sender address
                to: to, // list of receivers
                subject: subject, // Subject line
                html: body, // html body
            });
        } catch (error) {
            console.error('notification.js', error);
        }
    },
};
