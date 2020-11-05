const { readFile, writeFile } = require('../daos/index');

const dbFilePath = `${__dirname}../../../data/blog-db.json`;

module.exports = {
    getById: async (req, res, next) => {
        try {
            const id = Number(req.params.id);
            const blogs = await readFile(dbFilePath);
            const singleBlog = blogs.find(blog => blog.id === id);

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
            const data = await readFile(dbFilePath);
            res.send(data);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const incomingBlog = req.body;
            const blogList = await readFile(dbFilePath);
            incomingBlog.id = blogList.length + 1;
    
            blogList.push(incomingBlog);
            await writeFile(dbFilePath, blogList);
        
            res.send(incomingBlog);
        } catch (error) {
            next(error);
        }
    },
    updateById: async (req, res, next) => {
        try {
            const blogId = Number(req.params.id);
            const incomingBlog = req.body;
            const blogList = await readFile(dbFilePath);

            let flag = false;
            let resultIndex = -1;
            for (let index in blogList) {
                if (blogList[index].id === blogId) {
                    blogList[index] = { ...blogList[index], ...incomingBlog };
                    resultIndex = index;
                    flag = true;
                    break;
                }
            }
        
            if (!flag) {
                res.status(404).send(`Blog with id: ${blogId} not found!`);
            } else {
                await writeFile(dbFilePath, blogList);
                res.send(blogList[resultIndex]);
            }
        } catch (error) {
            next(error);
        }
    },
    deleteById: async (req, res, next) => {
        try {
            const blogId = Number(req.params.id);
            const blogList = await readFile(dbFilePath);
            const newBlog = blogList.filter(blog => blog.id !== blogId);
        
            if (!newBlog) {
                res.status(404).send(`Blog with id: ${blogId} not found!`);
            } else {
                await writeFile(dbFilePath, newBlog, "utf-8");
                res.send('OK');
            }
        } catch (error) {
            next(error);
        }
    }
}
