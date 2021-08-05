const { User } = require('../models');

const userdata = [{
        username: 'steve',
        email: 'steve@steve.com',
        password: '123456',
    },
    {
        username: 'john',
        email: 'john@john.com',
        password: '1234567',
    },


];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;