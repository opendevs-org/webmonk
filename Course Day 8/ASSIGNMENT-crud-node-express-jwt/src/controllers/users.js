const jwt = require('jsonwebtoken');
const { readFile } = require('../daos/index');

const dbFilePath = `${__dirname}../../../data/user-db.json`;

module.exports = {
    authenticate: async (req, res, next) => {
        const adminData = await readFile(dbFilePath);
        //NOTE: match if username & password are equal to the ones from user-db.json
        /** if true:
        * const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
        * res.json({ status: 200, data: { token } });
        */
       /**
        * else:
        * next({ status: 400, message: "Invalid username/password !", data: null });
        */
    },
};
