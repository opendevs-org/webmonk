const { readFile, writeFile } = require('../controller/index'); //NOTE: Importing the readFile & writeFile as separate functions

module.exports = {
    getById: async (req, res, next) => {
        try {
            const data = await readFile(dbFilePath);
            res.send(data);
        } catch (error) {
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const id = Number(req.params.id);
            const blogs = await readFile(dbFilePath);
            const singleBlog = blogs.find(blog => blog.id === id);

            if (!singleBlog) {
                res.status(404).send(`Account with id: ${id} not found!`);
            } else {
                res.send(singleBlog);
            }
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        //NOTE: implement create operation same way as course day 7
    },
    updateById: async (req, res, next) => {
        //NOTE: implement update operation same way as course day 7
    },
    deleteById: async (req, res, next) => {
        //NOTE: implement delete operation same way as course day 7
    }
}
