import React from 'react'
import DataStore from "../../books-store"

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this)
      }
      
      add(e) {
          DataStore.addToWishList(this.props.book);
        }
      

    render() {
        return (<div className=" col-sm-12 col-lg-4 col-md-4 book-item card" key={this.props.book.id}>
        <img src={this.props.book.imageUrl} />
        <h6>{this.props.book.name}</h6>
        <button className="button button-clear" onClick={this.add}>+ Wishlist</button>
      </div>)
    }
}

export default ListItem