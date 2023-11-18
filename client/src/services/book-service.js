const host = 'http://127.0.0.1:3000';

const listBooks = (callback) => {
    fetch(`${host}/books`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            callback(null, data);
        })
        .catch((err) => {
            console.log(err.message);
            callback(err.message, null);
        });
}

const getBook = (bookId, callback) => {
    fetch(`${host}/books/${bookId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            callback(null, data);
        })
        .catch((err) => {
            console.log(err.message);
            callback(err.message, null);
        });
}

const insertBook = (bookName, author, callback) => {
    fetch(`${host}/books`, {
        method: 'POST',
        body: JSON.stringify({
            book_name: bookName,
            author: author
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            callback(null, data);
        })
        .catch((err) => {
            console.log(err.message);
            callback(err.message, 0);
        });
}

const updateBook = (bookId, bookName, author, borrowed, callback) => {
    fetch(`${host}/books`, {
        method: 'PUT',
        body: JSON.stringify({
            book_id: bookId,
            book_name: bookName,
            author: author,
            borrowed: borrowed
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            callback(null, data);
        })
        .catch((err) => {
            console.log(err.message);
            callback(err.message, 0);
        });
}

const deleteBook = (bookId, callback) => {
    fetch(`${host}/books/${bookId}`, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            callback(null, data);
        })
        .catch((err) => {
            console.log(err.message);
            callback(err.message, 0);
        });
}


export default {
    listBooks,
    getBook,
    insertBook,
    updateBook,
    deleteBook
};