import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletBook, getBooks } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = async () => {
    try {
      await dispatch(deletBook(book.id));
      await dispatch(getBooks());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
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
              handleDeleteBook();
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
    </Section>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

const Section = styled.section`
  border: solid 1px #f0f0f0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 2rem 3rem;
  padding: 2rem 1.5rem;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .book-details {
      .genre {
        opacity: 0.5;
        font-size: 0.875rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #121212;
      }
      .title {
        font-size: 1.375rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.2px;
        color: #121212;
      }
      .author {
        margin: 0.25rem 0 0;
        font-size: 0.875rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4386bf;
      }
    }
    .interactions {
      padding-top: 1rem;
      margin: 0.188rem 0.938rem 0.125rem 0;

      .comments {
        margin: 0.188rem 0 0.125rem 0;
        font-size: 0.875rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4386bf;
        background-color: #fff;
        border: none;
      }
      .remove {
        height: 1.188rem;
        font-size: 0.875rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4386bf;
        background-color: #fff;
        border-right: 1px solid #e8e8e8;
        border-left: 1px solid #e8e8e8;
        border-top: none;
        border-bottom: none;
        padding: 0 0.938rem;
        margin: 0 0.938rem;
      }
      .edit {
        height: 1.188rem;
        font-size: 0.875rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4386bf;
        background-color: #fff;
        border: none;
      }
    }
  }

  .middle {
    display: flex;
    align-items: center;

    .circle {
      max-width: 6.25rem;
    }
    .progress-text {
      border-right: 1px solid #e8e8e8;

      .percentage {
        height: 2.438rem;
        margin: 0.063rem 5.75rem 0 0.688rem;
        font-size: 2rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #121212;
      }
      .completed {
        height: 1.125rem;
        margin: 0.438rem 4.938rem 0.75rem 0.75rem;
        opacity: 0.5;
        font-size: 0.875rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #121212;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .current-chapter-container {
      .current-chapter {
        height: 1.125rem;
        opacity: 0.5;
        font-size: 0.813rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #121212;
      }
      .book-chapter {
        height: 1.313rem;
        margin: 0.438rem 0 0.25rem 0;
        font-size: 1rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: #121212;
      }
    }
    .update-progress {
      margin: 0.75rem 0 0.563rem 0;
      padding: 0.438rem 1.188rem 0.5rem 1.375rem;
      border-radius: 3px;
      background-color: #2e90f0;
      color: #c3daf0;
    }
  }
`;
