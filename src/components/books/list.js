import React from 'react'
import DataStore from "../../books-store"
import ListItem from "./list-item"
import * as _ from 'lodash';

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
    this.state = this.getInitialState();
    this.search = this.search.bind(this);
  }
  getInitialState () {
    return {
      datastore: DataStore.getList()      
    };
  }

  search(e) {
    let searcjQery = e.target.value.toLowerCase(),
      displayedBooks = this.state.datastore.filter((el) => {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searcjQery) !== -1;
    });
    if(searcjQery.length === 0) {
      this.setState({
        datastore: DataStore.getList()
      });
      return;
    }
    this.setState({
      datastore: displayedBooks
    });
  }

  render() {
   
    return (<div className="row book-list">
    <input type="text" placeholder="Text" id="sf1-text" className="search" onKeyUp={this.search}/>
    { this.state.datastore.map((book) =>
        <ListItem book={book} parent={this} key={book.id}> </ListItem>
    )}
    </div>)
  }
}
export default List