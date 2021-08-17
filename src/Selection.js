import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class Selection extends Component {

   state={
       shelf:this.props.shelf,
       book:this.props.book,
   }
   

    render() {

        return (
            <div>
                 <select  
                        value={this.state.shelf} 
                        onChange= {e => { this.props.updateShelf(e, this.props.book) ;
                         this.setState({ 
                         shelf: e.target.value
                    
                         })
                       }}  
                     >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
            </div>
        )
    }
}

Selection.propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired,
  }

export default Selection