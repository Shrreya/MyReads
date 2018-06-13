import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends React.Component {

  state = {
    dataAvailable: false,
    shelvedBooks: [],
    searchedBooks: [],
    query: ''
  }

  async componentDidMount() {
    const shelvedBooks = await BooksAPI.getAll();
    this.setState({
      dataAvailable: true,
      shelvedBooks: shelvedBooks
    });
  }

  updateBooks = (book, shelf) => {
    book.shelf = shelf;
    if (shelf === 'none') {
      this.setState((currentState) => ({
        shelvedBooks: currentState.shelvedBooks.filter(shelvedBook => shelvedBook.id !== book.id)
      }));
    } else {
      this.setState((currentState) => ({
        shelvedBooks: currentState.shelvedBooks.filter(shelvedBook => shelvedBook.id !== book.id).concat([book])
      }));
    }
    BooksAPI.update(book, shelf);
  }

  updateQuery = (query) => {
    this.setState({ query });
  }

  search = async (query) => {
    const searchedBooks = await BooksAPI.search(query);
    this.setState({ searchedBooks });
  }

  clearSearch = () => {
    this.setState({
      searchedBooks: []
    });
  }

  render() {
    const { dataAvailable, shelvedBooks, searchedBooks, query } = this.state;

    return (
      <div className="app">
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
      </div>
    )
  }
}

export default BooksApp;
