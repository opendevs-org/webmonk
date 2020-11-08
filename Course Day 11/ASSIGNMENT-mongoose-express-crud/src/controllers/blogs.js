const Blog = require('../models/blogs.model');
const { find } = require('../daos/index');

module.exports = {
    getById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const singleBlog = await find(Blog, { _id });

            if (!singleBlog) {
                res.status(404).send(`Blog with id: ${id} not found!`);
            } else {
                res.send(singleBlog);
            }
        } catch (error) {
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const data = await find(Blog, {});
            res.status(200).send(data);
        } catch (error) {
            next(error);
        }
    },
    getByUser: async (req, res, next) => {
        try {
            const data = await find(Blog, { 'user.email': req.user.email });
            res.status(200).send(data);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const { title, body } = req.body;

            if (!title || !body)
                return res
                    .status(400)
                    .json({ msg: 'Not all fields have been entered' });

            const user = {
                email: req.user.email
            }

            let newBlog = new Blog({ //NOTE: refactor
                title,
                body,
                user
            });

            newBlog = await newBlog.save();

            res.status(201).json(newBlog);
        } catch (error) {
            next(error);
        }
    },
    updateById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const updateRes = await Blog.findOneAndUpdate({ _id }, req.body); //NOTE: refactor
            res.status(200).json(updateRes);
        } catch (error) {
            next(error);
        }
    },
    deleteById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const deletedItem = await Blog.findByIdAndDelete(_id); //NOTE: refactor
            res.status(200).json(deletedItem);
        } catch (error) {
            next(error);
        }
    }
}
