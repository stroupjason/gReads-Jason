// // Update with your config settings - this work localy:
// require('dotenv').config()
// module.exports = {
//
//   development: {
//     client: 'pg',
//     connection: 'postgres://localhost/gread-jason',
//   },
//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     //   database: 'greads',
//     //   user:     'username',
//     //   password: 'password'
//   },
// };


// Kyle Coberly's way - tuturial couldn't get it to work:
require("dotenv").load();

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: process.env.DATABASE_NAME,
            user:     process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        }
    },
    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URI
    }
};
