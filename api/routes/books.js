var express = require('express');
var router = express.Router();

var db = require('../config/store');
var service = require('../services/book-service');

/* GET book details. */
router.get('/', function(req, res, next) {
    service.listBooks((err, rows) => {
        if (err)
            console.log(err.message);
        console.log(JSON.stringify(rows));
        res.send(rows);
    });
});

router.get('/:bookId', function(req, res, next) {
    service.getBook(req.params.bookId, (err, rows) => {
        if (err)
            console.log(err.message);
        console.log(JSON.stringify(rows));
        res.send(rows);
    });
});

router.post('/', function(req, res, next) {
    service.insertBook(req.body.book_name, req.body.author, (result ,err) => {
        if (err)
            console.log(err.message);
        res.send(`Inserted: ${result}\n`);
    });
});

router.put('/', function(req, res, next) {
    service.updateBook(req.body.book_id, req.body.book_name, req.body.author, req.body.borrowed, (result, err) => {
        if (err)
            console.log(err.message);
        res.send(`Rows updated: ${result}\n`);
    });
});

router.put('/:bookId', (req, res) => {
    service.updateBook(req.params.bookId, req.body.book_name, req.body.author, req.body.borrowed, (result, err) => {
        if (err)
            console.log(err.message);
        res.send(`Rows updated: ${result}\n`);
    });
});

router.delete('/:bookId', function(req, res, next) {
    service.deleteBook(req.params.bookId, (result, err) => {
        if (err)
            console.log(err.message);
        res.send(`Rows deleted: ${result}\n`);
    });
});

module.exports = router;
