var service = require('../services/book-service');

var bookId;

test('Create book', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBeGreaterThan(0);
        bookId = data;
        done();
      } catch (error) {
        done(error);
      }
    }
  
    service.insertBook("Book Name 1", "Author 1", callback);
  });


  test('Get book', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toEqual([{
                "author": "Author 1",
                "book_id": bookId,
                "book_name": "Book Name 1",
                "borrowed": "N"
              }]);
        done();
      } catch (error) {
        done(error);
      }
    }
  
    service.getBook(bookId, callback);
  });

  test('Get book List', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data.length).toBeGreaterThan(0);
        done();
      } catch (error) {
        done(error);
      }
    }
  
    service.listBooks(callback);
  });

  test('Update book', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe(1);        
          done();
      } catch (error) {
        done(error);
      }
    }
  
    service.updateBook(bookId, "New Book Name", "New Author", "Y", callback);
  });

  test('Get book after Update', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toEqual([{
              "author": "New Author",
              "book_id": bookId,
              "book_name": "New Book Name",
              "borrowed": "Y"
            }]);        
          done();
      } catch (error) {
        done(error);
      }
    }
  
    service.getBook(bookId, callback);
  });

  test('Delete book', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe(1);        
          done();
      } catch (error) {
        done(error);
      }
    }
  
    service.deleteBook(1, callback);
  });

  test('Get book after Update', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toEqual([]);        
          done();
      } catch (error) {
        done(error);
      }
    }
  
    service.getBook(bookId, callback);
  });