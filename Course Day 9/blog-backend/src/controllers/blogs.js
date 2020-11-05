const { readFile, writeFile } = require('../daos/index'); //NOTE: Importing the readFile & writeFile as separate functions

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
            const incomingAccount = req.body;
            const accounts = await readFile(dbFilePath);
            incomingAccount.id = accounts.length + 1;
    
            accounts.push(incomingAccount);
            await writeFile(dbFilePath, accounts);
        
            res.send(accounts);
        } catch (error) {
            next(error);
        }
    },
    updateById: async (req, res, next) => {
        try {
            const accountId = Number(req.params.id);
            const incomingAccount = req.body;
            const accounts = await readFile(dbFilePath);

            let flag = false;
            let resultIndex = -1;
            for (let index in accounts) {
                if (accounts[index].id === accountId) {
                    accounts[index] = { ...accounts[index], ...incomingAccount };
                    resultIndex = index;
                    flag = true;
                    break;
                }
            }
        
            if (!flag) {
                res.status(404).send(`Account with id: ${accountId} not found!`);
            } else {
                await writeFile(dbFilePath, accounts);
                res.send(accounts[resultIndex]);
            }
        } catch (error) {
            next(error);
        }
    },
    deleteById: async (req, res, next) => {
        try {
            const accountId = Number(req.params.id);
            const accounts = await readFile(dbFilePath);
            const newAccounts = accounts.filter(account => account.id !== accountId);
        
            if (!newAccounts) {
                res.status(404).send(`Account with id: ${accountId} not found!`);
            } else {
                await writeFile(dbFilePath, newAccounts, "utf-8");
                res.send(newAccounts);
            }
        } catch (error) {
            next(error);
        }
    }
}
