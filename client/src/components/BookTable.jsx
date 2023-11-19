import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BookTable({ books, deleteBook, updateBook }) {

    const tableRows = books.map(book =>
        <tr key={book.book_id}>
            <td>{book.book_id}</td>
            <td>{book.book_name}</td>
            <td>{book.author}</td>
            <td>
                <Form.Select value={book.borrowed} onChange={(e) => updateBook(book.book_id, book.book_name, book.author, e.target.value)}>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                </Form.Select>
            </td>
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
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    );
}

export default BookTable;