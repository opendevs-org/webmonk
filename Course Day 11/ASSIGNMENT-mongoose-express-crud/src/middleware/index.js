const { verify } = require("jsonwebtoken");
const Blog = require('../models/users.model');

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

            const verified = verify(token, process.env.JWT_SECRET); // process.env.JWT_SECRET
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
            const blog = await Blog.findOne({ _id: req.params._id }); //NOTE getting id from params of blog and finding that blog
            if (blog.user.email === req.user.email) { // NOTE if email stored in user object of a blog is same as email we received from JWT token stored in req.user object, allow edit/delete
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
