import React, { Component } from "react";
import Selection from "./Selection";
import PropTypes from "prop-types";
class OnlyBook extends Component {
  render() {
    const { book } = this.props;
    return (
      <div>
        <div key={book.id}>
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <Selection
                    key={book.id}
                    book={book}
                    shelf={this.props.shelf}
                    updateShelf={this.props.updateShelf}
                  />
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors && ( //handling missing author
                <div className="book-authors">
                  {book.authors.map(( //to show all authors
                    author,
                    index 
                  ) => (
                    <p key={index}>{author}</p>
                  ))}
                </div>
              )}
              {book.averageRating && (
                <div className="book-ratings">
                  {" "}
                  Rating: {book.averageRating}
                </div>
              )}
            </div>
          </li>
        </div>
      </div>
    );
  }
}
//prop types
OnlyBook.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
};
export default OnlyBook;
