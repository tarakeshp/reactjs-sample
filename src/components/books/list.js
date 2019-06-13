import React from 'react'
import DataStore from "../../books-store"
import ListItem from "./list-item"

// const BookItems = booksData.data.map((book, index) =>
//  <div className="column column-25 book-item" key={book.id}>
//    <img src={book.imageUrl} onClick={this.addToWishList}/>
//    <h6>{book.name}</h6>
//    <button className="button button-clear" data-book-id={book.id}>+ Wishlist</button>
//  </div>
// );

class List extends React.Component {
  
  constructor() {
    super();
    this.datastore = DataStore.getList()
  }
  render() {
   
    return (<div className="row book-list">
    <input type="text" placeholder="Text" id="sf1-text" className="search" />
    { this.datastore.map((book) =>
        <ListItem book={book} parent={this}> </ListItem>
    )}
    </div>)
  }
}
export default List