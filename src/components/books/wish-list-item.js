import React from 'react'
import DataStore from "../../books-store"

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this)
        this.start = this.start.bind(this)
      }
      
      remove(e) {
        DataStore.removeFromWishList(this.props.book);
        this.props.parent.updateView();
      }

      start(e) {
          DataStore.addToCurrentlyReading(this.props.book);
          DataStore.removeFromWishList(this.props.book);
          this.props.parent.updateView();
      }


    render() {
        return (
        <div className=" col-sm-12 col-lg-4 col-md-4 book-item card" key={this.props.book.id}>
            <img src={this.props.book.imageUrl} />
            <h6>{this.props.book.name}</h6>
            <button className="button button-clear" onClick={this.remove}>- Remove</button>
            <button className="button button-clear" onClick={this.start}> > Start</button>
        </div>)
    }
}

export default ListItem