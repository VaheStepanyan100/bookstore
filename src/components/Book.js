import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBookClick }) => {
  const handleRemove = () => {
    handleRemoveBookClick(book.id);
  };

  return (
    <section>
      <article className="left">
        <div className="book-details">
          <p className="genre">{book.genre}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </div>
        <div className="interactions">
          <button type="button" className="comments">
            Comments
          </button>
          <button type="button" className="remove" onClick={handleRemove}>
            Remove
          </button>
          <button type="button" className="edit">
            Edit
          </button>
        </div>
      </article>
      <article className="middle">
        <div className="circle">
          <CircularProgressbar
            value={parseInt(book.completed, 10)}
            text={`${book.completed}`}
          />
        </div>
        <div className="progress-text">
          <p className="percentage">{book.completed}</p>
          <p className="completed">Completed</p>
        </div>
      </article>
      <article className="right">
        <div className="current-chapter-container">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="book-chapter">{book.chapter}</p>
        </div>
        <button type="button" className="update-progress">
          UPDATE PROGRESS
        </button>
      </article>
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBookClick: PropTypes.func.isRequired,
};

export default Book;
