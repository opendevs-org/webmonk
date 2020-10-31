const express = require("express");

const app = express();
const PORT = 3000;

// Middleware logger
const log = (req, res, next) => {
  console.log(req);
  // console.log('Method: %s, Route: %s', req.method, req.url);
  next();
};

// Middleware
app.use(express.json());
app.use(log);
let accounts = [
  {
    id: 1,
    username: "paulhal",
    role: "admin",
  },
  {
    id: 2,
    username: "johndoe",
    role: "guest",
  },
  {
    id: 3,
    username: "sarahjane",
    role: "guest",
  },
];

// app.get('/hello', (request,response) => {
//     response.send('hello world');
// })

/** GET ALL : http://localhost:3000/accounts */
app.get("/accounts", (request, response) => {
  response.json(accounts);
});

/** GET BY ID : http://localhost:3000/accounts/3 */
app.get("/accounts/:id", (request, response) => {
  const accountId = Number(request.params.id);
  const getAccount = accounts.find((account) => account.id === accountId);

  if (!getAccount) {
    response.status(404).send("Account not found.");
  } else {
    response.json(getAccount);
  }
});

/** INSERT(POST):  http://localhost:3000/accounts 
 * {
    "username": "davesmith",
    "role": "admin"
  } */
app.post("/accounts", (request, response) => {
  const id = accounts.length + 1;
  console.log(request.body);
  request.body.id = id;
  const incomingAccount = request.body;
  console.log(request.body);

  accounts.push(incomingAccount);

  response.json(accounts);
});

/** UPDATE */
app.put("/accounts/:id", (request, response) => {
  const accountId = Number(request.params.id);
  const body = request.body;
  const account = accounts.find((account) => account.id === accountId);
  const index = accounts.indexOf(account);

  if (!account) {
    response.status(404).send("Account not found.");
  } else {
    const updatedAccount = { ...account, ...body };

    accounts[index] = updatedAccount;

    response.send(updatedAccount);
  }
});

/** DELETE */
app.delete("/accounts/:id", (request, response) => {
  const accountId = Number(request.params.id);
  const newAccounts = accounts.filter((account) => account.id != accountId);
  console.log(newAccounts);

  if (!newAccounts) {
    response.status(404).send("Account not found.");
  } else {
    accounts = newAccounts;
    response.send(accounts);
  }
});

app.listen(PORT, () =>
  console.log(`Express server currently running on port ${PORT}`)
);
