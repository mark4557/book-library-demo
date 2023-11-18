import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import service from '../services/book-service'

//const books = [{"book_id":1,"book_name":"book1","author":"steve","borrowed":"N"},{"book_id":2,"book_name":"book1","author":"steve","borrowed":"N"},{"book_id":3,"book_name":"book1","author":"steve","borrowed":"N"},{"book_id":4,"book_name":"book1","author":"steve","borrowed":"N"},{"book_id":5,"book_name":"book1","author":"steve","borrowed":"N"},{"book_id":6,"book_name":"book1","author":"steve","borrowed":"N"},{"book_id":7,"book_name":"book1","author":"steve","borrowed":"N"},{"book_id":8,"book_name":"book1","author":"steve","borrowed":"N"}];


function BookTable() {
    const [books, setBooks] = useState([]);

    const tableRows = books.map(book =>
        <tr key={book.book_id}>
            <td>{book.book_id}</td>
            <td>{book.book_name}</td>
            <td>{book.author}</td>
            <td>{book.borrowed}</td>
            <td> <Button variant="primary" onClick={() => alert('{book.book_id}')}>Edit</Button></td>
        </tr>
    );

    useEffect(() => {
        service.listBooks((err, result) => {
            if (err) {
                console.log(err);
                //setShowAlert(true);
            } else {
                setBooks(result);
            }
        });
    }, []);

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Borrowed</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    );
}

export default BookTable;