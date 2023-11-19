# book-library-demo

This is a Book Library Catalogue Demonstration based on Node.js and React

## About the demo
The repository contains two seperate applications.  
- An API application which utilises the following technologies:
    - Node.js
    - Express.js
    - Sqlite3

- A front end application utilising the following technologies:
    - Node.js
    - React
    - Vite
    - Bootstrap

## Deploying the Demo
1. In a terminal clone the git repository:
<pre>git clone https://github.com/mark4557/book-library-demo.git</pre>
2. This will create the following folder structure:
    - /book-library-demo
        - /api
        - /client
3. Make sure you have node.js 20.9.0+ installed.

## Testing the API
The api utilises Jest and SuperTest for unit testing.  To run these test you can do the following.

1. In your terminal, navigate to the `api` directory.
2. Type `npm install` to install all dependencies.
3. Type `npm test` to run the unit tests.

## Running the API
1. In your terminal, navigate to the `api` directory.
2. Type `npm install` to install all dependencies.
3. Type `npm start` to start the app.
4. The following messages should be displayed:
<pre> 
> api@0.1.0 start
> node ./bin/www

Connected to the in-memory SQlite database.
</pre>

## Running the Client
1. In another terminal, navigate to the `client` directory.
2. Type `npm install` to install all dependencies.
3. Type `npm run dev` to start the app
4. The following messages should be displayed:
<pre>
  VITE v4.5.0  ready in 183 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
</pre>

## Using the application
1. With the two apps running, open your browser to http://localhost:5173/.
2. If you see a webpage saying `Library Catalogue Demo`, it means the application is working.
3. You can then add books and the list should update.

![](./book_library.png?raw=true)
