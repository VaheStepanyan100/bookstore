import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <section>
      <article className="left">
        <div className="book-details">
          <p className="genre">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </div>
        <div className="interactions">
          <Button className="comments">Comments</Button>
          <Button
            className="remove"
            onClick={() => {
              dispatch(removeBook(book.item_id));
            }}
          >
            Remove
          </Button>
          <Button className="edit">Edit</Button>
        </div>
      </article>
      <article className="middle">
        <div className="circle">
          <CircularProgressbar value={60} />
        </div>
        <div className="progress-text">
          <p className="percentage">60%</p>
          <p className="completed">Completed</p>
        </div>
      </article>
      <article className="right">
        <div className="current-chapter-container">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="book-chapter">Chatpte 18</p>
        </div>
        <Button type="button" className="update-progress">
          UPDATE PROGRESS
        </Button>
      </article>
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
