import React, { Component } from "react";
import OnlyBook from "./OnlyBook";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  state = {
    books: [],
    mainBooks: [],
    inputField: "",
    error: false,
    shelf: this.props.shelf
  };

  //to delete search bar after closing the page
  componentWillUnmount() {
    this.setState({ inputField: "" });
  }

  componentDidMount() {
    this.setState({ mainBooks: [] });
    BooksAPI.getAll().then(data => {
      this.setState({ mainBooks: data });
    });
  }

  //Handling the search bar and making all book shelves = none as default value
  //handling errors for not supported search terms
  SearchField = inputField => {
    this.setState(() => ({
      inputField: inputField
    }));
    BooksAPI.search(inputField.toLowerCase()).then(data => {
      if (inputField !== "" && !data.error) {
        data.forEach(bo => (bo.shelf = "none"));
        this.setState({ books: data });
      } else {
        this.setState({ error: true });
      }
    });
  };

  // updating shelf with specified value and attaching it to the books array
  updateShelf = (e, book) => {
    const userInput = e.target.value;
    book.shelf = userInput;
    BooksAPI.search(this.state.inputField.toLowerCase()).then(data => {
      if (this.state.inputField !== "" && !data.error) {
        data.forEach(bo => (bo.shelf = book.shelf));

        this.setState({ books: data });
      } else {
        this.setState({ error: true });
      }
      console.log(this.state.books);
    });
    BooksAPI.update(book, e.target.value);
  };

  render() {
    let verifiedBooks = [];
    if (this.state.books.length > 0) {
      verifiedBooks = this.state.books.map(book => {
        this.state.mainBooks.forEach(bookOnShelf => {
          if (book.id === bookOnShelf.id) {
            book.shelf = bookOnShelf.shelf;
          }
        });
        return book;
      });
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.inputField}
              onChange={e => this.SearchField(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.error ? (
            <div>Search Term is not supported </div>
          ) : (
            <ol className="books-grid">
              {this.state.inputField !== "" &&
                verifiedBooks
                  .filter(book => book.imageLinks) //handling books that have missing thumbnails
                  .map(book => (
                    <OnlyBook
                      key={book.id}
                      book={book}
                      shelf={book.shelf ? book.shelf : "none"}
                      updateShelf={this.updateShelf}
                    />
                  ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
