import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import OnlyBook from "./OnlyBook";
import PropTypes from "prop-types";
class ListBooks extends Component {
  state = {
    selectedValue: "",
    books: [],
    shelfc: "currentlyReading",
    shelfw: "wantToRead",
    shelfr: "read"
  };
  //Fetching data from API
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  

  render() {
    const { books } = this.state;
    return (
      //currentlyReading shelf
      //filtering fetched books by their shelf and mapping over it to show individual book
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === "currentlyReading")
                .map(book => (
                  <OnlyBook
                    key={book.id}
                    book={book}
                    shelf={book.shelf}
                    updateShelf={this.props.updateShelf}
                  />
                ))}
            </ol>
          </div>

          {/* //wanttoRead */}

          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === "wantToRead")
                .map(book => (
                  <OnlyBook
                    key={book.id}
                    book={book}
                    shelf={book.shelf}
                    updateShelf={this.props.updateShelf}
                  />
                ))}
            </ol>
          </div>

          {/* Read */}

          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === "read")
                .map(book => (
                  <OnlyBook
                    key={book.id}
                    book={book}
                    shelf={book.shelf}
                    updateShelf={this.props.updateShelf}
                  />
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

//prop types 
ListBooks.propTypes = {
  updateShelf: PropTypes.func.isRequired
};
export default ListBooks;
