const users = require('../models/swag');
const id = 1;

module.exports = {
    login: (req, res, next) => {
      

    },

    register: (req, res, next) => {
        const { session } = req;
        const { username, password } = req.body;
        users.push({ id, username, password });
        session.user.username = username;
        id++;

    },

    signout: (req, res, next) => {
        const { session } = req;
        session.destroy();
        res.status(200).send( req.session )

    },

    getUser: (req, res, next) => {
        const { session } = req;
        res.status(200).send( session.user )
    }
}
