// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gread-jason',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    //   database: 'greads',
    //   user:     'username',
    //   password: 'password'
  },
};
