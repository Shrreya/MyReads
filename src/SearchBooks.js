import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends React.Component {

	constructor(props) {
    super(props);
    this.searchBooks = this.searchBooks.bind(this);
  }

	state = {
		query: '',
		books: []
	}

	searchBooks(event) {
		const query = event.target.value;

		this.setState(() => ({
				query: query.trim(),
				books: []
		}))

		query !== '' && BooksAPI.search(query)
			.then((searchedBooks) => {
				const bookPromises = searchedBooks.map((searchedBook) => {
					return BooksAPI.get(searchedBook.id);
				})
				Promise.all(bookPromises)
					.then((bookResults) => {
						this.setState(() => ({
				      books: bookResults
				    }))
					})
			})
  }

	updateListBooks = (book, shelf) => {
		this.props.onUpdateListBooks(book, shelf);
	}

	render() {

		const { query, books } = this.state;

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link
          	className="close-search"
          	to='/'>
          		Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
							type="text"
							placeholder="Search by title or author"
							value={query}
            	onChange={this.searchBooks}
						/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
						{
							books.map((book) => (
								<li key={book.id}>
									<Book
										book={book}
										onUpdateBookShelf={(book, shelf) => {this.updateListBooks(book, shelf)}}
									/>
								</li>
							))
						}
					</ol>
        </div>
      </div>
		)
	}
}

export default SearchBooks;
