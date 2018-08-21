import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from '../utils/BooksAPI';
import '../styles/App.css';

// Component to be rendered in case of a 404 no match
const NoMatch = () => (
  <div className='no-match'>
    <h3>404! Cannot find this page at the moment.</h3>
  </div>
);

class BooksApp extends React.Component {

  state = {
    dataAvailable: false,
    shelvedBooks: [],
    searchedBooks: [],
    query: ''
  }

  // Get all books on shelves
  async componentDidMount() {
    const shelvedBooks = await BooksAPI.getAll();
    this.setState({
      dataAvailable: true,
      shelvedBooks: shelvedBooks
    });
  }

  // Update books collection by shelf
  updateBooks = (book, shelf) => {
    book.shelf = shelf;
    // Remove book from collection
    if (shelf === 'none') {
      this.setState((currentState) => ({
        shelvedBooks: currentState.shelvedBooks.filter(shelvedBook => shelvedBook.id !== book.id)
      }));
    }
    // Add new book or change shelf of exisiting book
    else {
      this.setState((currentState) => ({
        shelvedBooks: currentState.shelvedBooks.filter(shelvedBook => shelvedBook.id !== book.id).concat([book])
      }));
    }
    BooksAPI.update(book, shelf);
  }

  // Update search query
  updateQuery = (query) => {
    this.setState({ query });
  }

  // Perform search by query
  search = async (query) => {
    const searchedBooks = await BooksAPI.search(query);
    this.setState({ searchedBooks });
  }

  // Clear search results
  clearSearch = () => {
    this.setState({
      searchedBooks: []
    });
  }

  render() {
    const { dataAvailable, shelvedBooks, searchedBooks, query } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <ListBooks
              dataAvailable={dataAvailable}
              shelvedBooks={shelvedBooks}
              onUpdateListBooks={this.updateBooks}
            />
          )} />
          <Route path='/search' render={() => (
            <SearchBooks
              shelvedBooks={shelvedBooks}
              searchedBooks={searchedBooks}
              query={query}
              onUpdateQuery={this.updateQuery}
              onSearch={this.search}
              onUpdateListBooks={this.updateBooks}
              onClear={this.clearSearch}
            />
          )} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp;
