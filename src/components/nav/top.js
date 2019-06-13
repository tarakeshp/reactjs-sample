import React from 'react'
class TopNav extends React.Component {
  render() {
    return ( 
    <div>
      <a className="button hidden-sm" href="#books">Home</a> 
      <label htmlFor="drawer-control" className="drawer-toggle"></label>

      <input type="checkbox" id="drawer-control" className="drawer" />
      <div  className="hidden-lg hidden-lg" >
        <label htmlFor="drawer-control" className="drawer-close"></label>
        <ul>
          <li><a className="button" href="#books">Home</a></li>
          <li><a className="button" href="#books">Books</a></li>
          <li><a className="button" href="#wish-list">Wish List</a></li>
          <li><a className="button" href="#currently-reading">Currently Reading</a></li>
       </ul>
      </div>
    </div>
    )
  }
}
export default TopNav