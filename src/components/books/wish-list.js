import React from 'react'
import DataStore from "../../books-store"
import ListItem from "./wish-list-item"

class WishList extends React.Component {
  
  constructor() {
    super();
    this.datastore = DataStore.getWishlist()
  }

  updateView() {
    this.props.history.push(`/wish-list`)
  }

  render() {
    return (<div className="row book-list">
    { this.datastore.map((book) =>
        <ListItem book={book} parent={this} key={book.id}>
        </ListItem>
    )}
    </div>)
  }
}
export default WishList