import React from 'react'
import DataStore from "../../books-store"
import ListItem from "./current-reading-item"

class CurrentReading extends React.Component {
  constructor(props) {
    super(props);
  }
  
  updateView() {
    this.props.history.push(`/currently-reading`)
  }


  render() {
    return (<div className="row book-list">
    { DataStore.getCurrentlyReading().map((book) =>
        <ListItem book={book} parent={this}/>
    )}
    </div>)
  }
}
export default CurrentReading