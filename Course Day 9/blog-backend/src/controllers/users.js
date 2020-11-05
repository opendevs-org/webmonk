const { sign } = require("jsonwebtoken");
const { readFile, writeFile } = require("../daos/index");

const dbFilePath = `${__dirname}../../../data/user-db.json`;

module.exports = {
    get: async (req, res, next) => {
        try {
            const email = req.user.email;
            const userList = await readFile(dbFilePath);
            const user = userList.find(
                (user) => user.email === email
            );
            res.json({
                email: user.email,
                displayName: user.displayName,
            });
        } catch (error) {
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            // validate
            if (!email || !password)
                return res
                    .status(400)
                    .json({ msg: "Not all fields have been entered." });

            const userList = await readFile(dbFilePath);
            const user = userList.find(
                (user) => user.email === email
            );
            console.log(user);
            if (!user)
                return res.status(400).json({
                    msg: "No account with this email has been registered.",
                });
            const isMatch = (user.password === password)
            if (!isMatch)
                return res.status(400).json({ msg: "Invalid credentials." });
            const token = sign({ email: user.email }, ']x"_w%n.^kGC(/]M5A6\:+xyV{v^jy?vq?%?sHQ{$(>uQ7,E5B'); // process.env.JWT_SECRET

            res.json({
                token,
                user: {
                    email: user._email,
                    displayName: user.displayName,
                },
            });
        } catch (error) {
            next(error);
        }
    },

    register: async (req, res, next) => {
        try {
            let { email, password, passwordCheck, displayName } = req.body;

            if (!email || !password || !passwordCheck)
                return res
                    .status(400)
                    .json({ msg: "Not all fields have been entered." });

            if (password.length < 5)
                return res.status(400).json({
                    msg: "The password needs to be at least 5 characters long.",
                });

            if (password !== passwordCheck)
                return res.status(400).json({
                    msg: "Enter the same password twice for verification.",
                });
            const userList = await readFile(dbFilePath);
            const existingUser = userList.find((user) => user.email === email);
            if (existingUser)
                return res.status(400).json({
                    msg: "An account with this email already exists.",
                });

            if (!displayName) displayName = email;

            const incomingUser = req.body;
            userList.push(incomingUser);
            await writeFile(dbFilePath, userList);
            res.json(incomingUser);
        } catch (error) {
            next(error);
        }
    },
};
