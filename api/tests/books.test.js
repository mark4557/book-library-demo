const request = require("supertest")
var app = require('../app');
var http = require('http');

describe('GET /books', function() {
  beforeAll(async () => {
    await request(app).post("/books").send({"book_name":"book1","author":"steve"});
  })
  it('responds with json', async function() {
    const response = await request(app)
      .get('/books')
      .set('Accept', 'application/json')
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBe(true);
  });
});


describe('GET /book/:bookId', function() {
  beforeAll(async () => {
    await request(app).post("/books").send({"book_name":"book1","author":"steve"});
  })
  it('responds with json', async function() {
    const response = await request(app)
      .get('/books/1')
      .set('Accept', 'application/json')
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBe(true);
  });
});


describe('PUT /books', function() {
  beforeAll(async () => {
    await request(app).post("/books").send({"book_name":"book1","author":"steve"});
  })
  it('responds with json', async function() {
    const response = await request(app)
      .put('/books/1')
      .send({"book_name":"book2222","author":"steve2222", "borrowed":"Y"})
      .set('Accept', 'application/json')
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.count).toBe(1);
  });
});

describe('DELETE /books', function() {
  beforeAll(async () => {
    await request(app).post("/books").send({"book_name":"book1","author":"steve"});
  })
  it('responds with json', async function() {
    const response = await request(app)
      .delete('/books/1')
      .set('Accept', 'application/json')
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.count).toBe(1);
  });
});