import React from "react";
import "./App.css";
import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
class BooksApp extends React.Component {
  state = {
    books: [],
    shelf: "none"
  };

  //function to update shelf with the selected value, used in List books component
  updateShelf = (e, book) => {
    const inputValue = e.target.value;

    this.setState(currentState => {
      currentState.shelf = inputValue;
      console.log(this.state.shelf);
      book.shelf = inputValue;
      const updatedArray = [...currentState.books];
      console.log(updatedArray);
      return {
        books: updatedArray
      };
    });
    BooksAPI.update(book, e.target.value);
    console.log(book);
  };

  render() {
    return (
      <div className="app">
      {/* Main page of List Books */}
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {/* //hena */}
                  <ListBooks updateShelf={this.updateShelf} />
                </div>
              </div>
              <div className="open-search">
                <Link
                  className="open-search-link" //to="/search"
                  to={{
                    pathname: "/search",
                    state: this.state.shelf
                  }}
                >
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
          {/* Search page */}
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
