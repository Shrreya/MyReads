import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {

  render() {

    const { book } = this.props;
    const bookTitle = book.title;
    const bookAuthors = book.authors;
    const bookCoverUrl = `url(${book.imageLinks.thumbnail})`;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookCoverUrl }} />
          <BookShelfChanger />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    )
  }
}

export default Book;

//TODO : make a comma separated string for multiple authors
// set correct shelf in BookShelfChanger props
