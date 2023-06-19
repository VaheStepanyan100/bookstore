import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    dispatch(addBook([title, author]));
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h1 className="title">Add Book</h1>
      <form className="form">
        <input
          className="book-title"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="book-author"
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="add-book" type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
