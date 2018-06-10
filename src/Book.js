import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {

  updateBookShelf = (book, shelf) => {
    this.props.onUpdateBookShelf(book, shelf);
  }

  render() {

    const { book } = this.props;
    const bookTitle = book.title;
    const bookAuthors = book.hasOwnProperty('authors') ? book.authors.join(`, `) : 'Unknown';
    const bookCoverUrl = `url(${book.imageLinks.thumbnail})`;
    const bookShelf = book.hasOwnProperty('shelf') ? book.shelf : 'none';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: bookCoverUrl }} />
          <BookShelfChanger shelf={bookShelf} onChangeShelf={(shelf) =>
            {this.updateBookShelf(book, shelf)}}/>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    )
  }
}

export default Book;
