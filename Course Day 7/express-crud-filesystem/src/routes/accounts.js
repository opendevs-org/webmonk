const { Router } = require('express');

const { readFile, writeFile } = require('../controller/index'); //NOTE: Importing the readFile & writeFile as separate functions

const router = Router();
const dbFilePath = `${__dirname}../../../data/db.json`; //NOTE: defining file path as global to remove repetition

//NOTE: READ route to read all objects
router.get("/accounts", async (req, res) => {
    try {
        const data = await readFile(dbFilePath); //NOTE: to read data from file at dbFilePath variable's path
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

//NOTE: READ route to read a single object by matching id
router.get("/accounts/:id", async (req, res) => {
    try {
        const accountId = Number(req.params.id); //NOTE: req.params contains object with all the parameters send. this id should be same name as specified in the route above
        const accounts = await readFile(dbFilePath); //NOTE: to read data from file at dbFilePath variable's path
        const getAccount = accounts.find((account) => account.id === accountId); //NOTE: to find the object with same id as the one received in parameter

        if (!getAccount) {
            res.status(404).send(`Account with id: ${accountId} not found!`);
        } else {
            res.send(getAccount);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

//NOTE: CREATE route to add a new object 
router.post("/accounts", async (req, res) => {
    try {
        const incomingAccount = req.body;
        const accounts = await readFile(dbFilePath); //NOTE: to read data from file at dbFilePath variable's path
        incomingAccount.id = accounts.length + 1; //NOTE: calculating id based on array length

        accounts.push(incomingAccount);
        await writeFile(dbFilePath, accounts); //NOTE: to save data into the file at dbFilePath variable's path
    
        res.send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
});

//NOTE: UPDATE route to modify a object
router.put("/accounts/:id", async (req, res) => {
    const accountId = Number(req.params.id); //NOTE: req.params contains object with all the parameters send. this id should be same name as specified in the route above
    const incomingAccount = req.body;
    const accounts = await readFile(dbFilePath); //NOTE: to read data from file at dbFilePath variable's path

    let flag = false; //NOTE: to keep check if any document with id exists
    let resultIndex = -1; //NOTE: to keep track of index of object with satisfying condition's id so that we can only return the modified document
    for (let index in accounts) { //NOTE: for loop to update the document by first finding the document with same id and then modifying it by destructuring
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
        await writeFile(dbFilePath, accounts); //NOTE: to save data into the file at dbFilePath variable's path
        res.send(accounts[resultIndex]);
    }
});

//NOTE: DELETE route to delete a object
router.delete("/accounts/:id", async (req, res) => {
    const accountId = Number(req.params.id); //NOTE: req.params contains object with all the parameters send. this id should be same name as specified in the route above
    const accounts = await readFile(dbFilePath); //NOTE: to read data from file at dbFilePath variable's path
    const newAccounts = accounts.filter((account) => account.id !== accountId); //NOTE: filter based on condition to keep all the objects with id not equal to received id

    if (!newAccounts) {
        res.status(404).send(`Account with id: ${accountId} not found!`);
    } else {
        await writeFile(dbFilePath, newAccounts, "utf-8");
        res.send(newAccounts);
    }
});

module.exports = router; //NOTE: Exporting as complete module with module.exports syntax, this can't be destructed into separate functions
