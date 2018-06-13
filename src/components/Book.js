import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    shelvedBooks: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  updateBookShelf = (book, shelf) => {
    this.props.onUpdateBookShelf(book, shelf);
  }

  render() {

    const { book, shelvedBooks } = this.props;
    const bookTitle = book.title;
    // Set author names or default to Unknown
    const bookAuthors = book.authors ? book.authors.join(`, `) : 'Unknown';
    // Set book cover image or default to blank cover
    const bookCoverUrl = book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ``;
    // Set book shelf or default to None
    const bookShelf = shelvedBooks.find(shelvedBook => shelvedBook.id === book.id) ?
      shelvedBooks.find(shelvedBook => shelvedBook.id === book.id).shelf :
      'none';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193,
            backgroundImage: bookCoverUrl }}
          />
          <BookShelfChanger
            shelf={bookShelf}
            onChangeShelf={(shelf) => {this.updateBookShelf(book, shelf)}}
          />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    )
  }
}

export default Book;
