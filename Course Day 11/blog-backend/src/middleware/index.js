const { verify } = require("jsonwebtoken");
const { getById } = require('../controllers/blogs.js');

module.exports = {
    auth: (req, res, next) => {
        try {
            let token = req.headers.authorization;
            if (!token)
                return res.status(401).json({ msg: "NO authentication token, access denied" });

            token = token.split(' ')[1];

            if (!token)
                return res
                    .status(401)
                    .json({ msg: "No authentication token, access denied" });

            const verified = verify(token, process.env.JWT_SECRET);
            if (!verified)
                return res.status(401).json({
                    msg: "Token verification failed, authorization denied",
                });
            req.user = verified;
            next();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    idCheck: async (req, res, next) => {
        try {
            const blog = await getById(req.params._id);
            if (blog.user.email === req.user.email) {
                next();
            } else {
                return res.status(401).json({
                    msg: "You are not authorized to tamper this blog",
                });
            }
        } catch (error) {
            res.status(500).json({ error: err.message });
        }
    },
};
