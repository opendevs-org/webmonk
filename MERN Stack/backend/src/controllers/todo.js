const Todo = require('../models/todo.model');

module.exports = {
    getById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const singleTodo = await Todo.findById(_id);

            if (!singleTodo) {
                res.status(404).send(`Todo with id: ${id} not found!`);
            } else {
                res.status(200).send(singleTodo);
            }
        } catch (error) {
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const data = await Todo.find({});
            res.status(200).send(data);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            let newTodo = new Todo(req.body);
            newTodo = await newTodo.save();
            res.status(201).json(newTodo);
        } catch (error) {
            next(error);
        }
    },
    updateById: async (req, res, next) => {
        try {
            const _id = req.params._id;
            const updateRes = await Todo.findOneAndUpdate({ _id }, req.body);
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
    }
}
