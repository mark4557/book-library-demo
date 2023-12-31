var express = require('express');
var router = express.Router();

var service = require('../services/book-service');

/* GET book details. */
router.get('/', function(req, res, next) {
    service.listBooks((err, rows) => {
        if (err)
            console.log(err.message);
        res.send(rows);
    });
});

router.get('/:bookId', function(req, res, next) {
    service.getBook(req.params.bookId, (err, rows) => {
        if (err)
            console.log(err.message);
        res.send(rows);
    });
});

router.post('/', function(req, res, next) {
    service.insertBook(req.body.book_name, req.body.author, (err, result) => {
        if (err)
            console.log(err.message);
        res.send({'book_id': result});
    });
});

router.put('/', function(req, res, next) {
    service.updateBook(req.body.book_id, req.body.book_name, req.body.author, req.body.borrowed, (err, result) => {
        if (err)
            console.log(err.message);
        res.send({'count': result});
    });
});

router.put('/:bookId', (req, res) => {
    service.updateBook(req.params.bookId, req.body.book_name, req.body.author, req.body.borrowed, (err, result) => {
        if (err)
            console.log(err.message);
            res.send({'count': result});
        });
});

router.delete('/:bookId', function(req, res, next) {
    service.deleteBook(req.params.bookId, (err, result) => {
        if (err)
            console.log(err.message);
            res.send({'count': result});
        });
});

module.exports = router;
