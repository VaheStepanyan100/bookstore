import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksSlice';

const ListBooks = () => {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector((store) => store.bookstore);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksArray = Object.entries(books).reduce((acc, [id, bookList]) => {
    const booksWithId = bookList.map((book) => ({ ...book, id }));
    return [...acc, ...booksWithId];
  }, []);

  return (
    <section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {booksArray.map((book) => (
            <Book key={book.id} book={book} />
          ))}
          <AddBook />
        </>
      )}
    </section>
  );
};

export default ListBooks;
