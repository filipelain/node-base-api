const userModel = require('../models/users');
const users = {};
users.index = (req, resp) => {
    return resp.status(401).send('not Authorized');
};
users.find = (req, resp) => {
    const response =  userModel.find(req.query.id);

    const object = !response.user ? response.message : response.user;
    return resp.status(response.status).send(  )

};


module.exports = users;
