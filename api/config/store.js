const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
  createTables(db)
});

function closeDB(db) {
  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}

function createTables(newdb) {
    newdb.exec(`
    create table book (
        book_id integer primary key,
        book_name text not null,
        author text not null,
        borrowed text not null
    );`, ()  => {
    });
}

module.exports = db;