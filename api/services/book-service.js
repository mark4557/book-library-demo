var db = require('../config/store');

const listBooks = (callback) => {
    let sql = `select book_id, book_name, author, borrowed from book`;
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
    }); 
}
 
const getBook = (bookId, callback) => {
    let sql = `select book_id, book_name, author, borrowed from book b
                where book_id = ?`;
    db.all(sql, bookId, (err, rows) => {
        callback(err, rows);
    });    
}

const insertBook = (bookName, author, callback) => {
    let sql = `insert into book(book_id, book_name, author, borrowed) values (?, ?, ?, ?)`;
    db.run(sql, [null, bookName, author, "N"], function (err) {
        if (err)
            callback(err, 0);
        else
            callback(null, this.lastID);    
    });
}

const updateBook = (bookId, bookName, author, borrowed, callback) => {
    let sql = `update book set book_name = ?,  author = ?, borrowed = ?
                where book_id = ?`;
    db.run(sql, [bookName, author, borrowed, bookId], function (err) {
        if (err)
            console.log(err.message);
        if (err)
            callback(err, 0);
        else
            callback(null, this.changes);
    });
}

const deleteBook = (bookId, callback) => {
    let sql = `delete from book where book_id = ?`;
    db.run(sql, [bookId], function (err) {
        if (err)
            callback(err, 0);
        else
            callback(null, this.changes);
    });
}

 
 module.exports = {
     listBooks, 
     getBook,
     insertBook,
     updateBook,
     deleteBook
 };