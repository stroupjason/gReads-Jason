var express = require('express');
var router = express.Router();
var knex = require("../knexfile");

/* GET users listing. */
router.get('/', function(req, res, next) {
    knex("books").select().then(function(books) {
        response.send(books);
    })
});

module.exports = router;
