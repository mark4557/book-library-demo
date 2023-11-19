import { useState, useEffect } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import BookTable from './components/BookTable'
import BookFormModal from './components/BookFormModal'
import service from './services/book-service'

function App() {

  const [books, setBooks] = useState([]);

  const deleteBook = (bookId) => {
    service.deleteBook(bookId, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        refreshData();
      }
    });
  };

  const refreshData = () => {
    service.listBooks((err, result) => {
      if (err) {
        console.log(err);
      } else {
        setBooks(result);
      }
    });
  };

  useEffect(() => {
    refreshData();
  }, []);


  return (
    <>
      <Header />
      <BookTable books={books} deleteBook={deleteBook} />
      <BookFormModal onUpdate={refreshData} />
    </>
  )
}

export default App
