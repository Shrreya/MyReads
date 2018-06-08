import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
  				books
  			}))
      })
  }

  updateBooks = (book, shelf) => {
    book.shelf = shelf;
    this.setState((currentState) => ({
      books: currentState.books.map((b) => {
        return b.id === book.id ? book : b;
      })
    }))
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks />
        )} />
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} onUpdateListBooks={(book, shelf) =>
            {this.updateBooks(book, shelf)}}/>
        )} />
      </div>
    )
  }
}

export default BooksApp;

// TODO : verify history on search Route
