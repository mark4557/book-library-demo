import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BookTable({ books, deleteBook }) {

    const tableRows = books.map(book =>
        <tr key={book.book_id}>
            <td>{book.book_id}</td>
            <td>{book.book_name}</td>
            <td>{book.author}</td>
            <td>{book.borrowed}</td>
            <td> <Button variant="primary" onClick={() => deleteBook(book.book_id)}>Delete</Button></td>
        </tr>
    );

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