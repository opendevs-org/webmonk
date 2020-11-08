const Blog = require('../models/blogs.model');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const data = await Blog.find({});
            res.status(200).send(data);
        } catch (error) {
            next(error);
        }
    },
    getByUser: async (req, res, next) => {
        try {
            const data = await Blog.find({ email: req.user.email });
            res.status(200).send(data);
        } catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const singleBlog = await Blog.find({ _id });

            if (!singleBlog) {
                res.status(404).send(`Blog with id: ${id} not found!`);
            } else {
                res.status(200).send(singleBlog);
            }
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const { title, description } = req.body;

            if (!title || !description)
                return res
                    .status(400)
                    .json({ msg: 'Not all fields have been entered' });

            const newBlog = new Blog({
                title,
                description,
                user
            });
            const savedBlog = await newBlog.save();
            res.status(201).json(savedBlog);
        } catch (error) {
            next(error);
        }
    },
    updateById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const updateRes = await Blog.findOneAndUpdate({ _id }, req.body);
            res.status(200).json(updateRes);
        } catch (error) {
            next(error);
        }
    },
    deleteById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const deletedItem = await Blog.findByIdAndDelete(_id);
            res.status(200).json(deletedItem);
        } catch (error) {
            next(error);
        }
    },
};
