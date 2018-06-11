import React from 'react';
import SearchBar from './SearchBar';
import Book from './Book';

class SearchBooks extends React.Component {

	updateListBooks = (book, shelf) => {
		this.props.onUpdateListBooks(book, shelf);
	}

	render() {

		const { query, onUpdateQuery, onSearch, onClear, searchedBooks, shelvedBooks } = this.props;

		return (
			<div className="search-books">
        <SearchBar
					query={query}
					onUpdateQuery={onUpdateQuery}
					onSearch={onSearch}
					onClear={onClear}
				/>
        <div className="search-books-results">
          <ol className="books-grid">
						{
							searchedBooks.length ?
								searchedBooks.map((book) => (
									<li key={book.id}>
										<Book
											book={book}
											shelvedBooks={shelvedBooks}
											onUpdateBookShelf={this.updateListBooks}
										/>
									</li>
								)) : <span>No books found</span>
						}
					</ol>
        </div>
      </div>
		)
	}
}

export default SearchBooks;
