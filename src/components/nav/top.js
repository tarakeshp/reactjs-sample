import React from 'react'
class TopNav extends React.Component {
  render() {
    return ( 
    <div>
      <a class="button hidden-sm" href="#books">Home</a> 
      <label for="drawer-control" class="drawer-toggle"></label>

      <input type="checkbox" id="drawer-control" class="drawer" />
      <div  class="hidden-lg hidden-lg" >
        <label for="drawer-control" class="drawer-close"></label>
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