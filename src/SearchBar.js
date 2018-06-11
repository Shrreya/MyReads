import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

  handleChange = event => {
    const newQuery = event.target.value
    this.props.onUpdateQuery(newQuery);
    newQuery ? this.props.onSearch(newQuery) : this.props.onClear();
  }

  render() {
    return (
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
            value={this.props.query}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
