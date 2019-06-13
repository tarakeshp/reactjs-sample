import React from 'react'
import DataStore from "../../books-store"

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this)
      }
      
      remove(e) {
        DataStore.complete(this.props.book);
        this.props.parent.updateView();
      }


    render() {
        return (
        <div className="column column-25 book-item card" key={this.props.book.id}>
            <img src={this.props.book.imageUrl} />
            <h6>{this.props.book.name}</h6>
            <button className="button button-clear" onClick={this.remove}>- Remove</button>
        </div>)
    }
}

export default ListItem