import React from 'react'
class SideNav extends React.Component {
  render() {
    return (  <ul>
    <li><a className="button" href="#books">Books</a></li>
    <li><a className="button" href="#wish-list">Wish List</a></li>
    <li><a className="button" href="#currently-reading">Currently Reading</a></li>
    </ul>)

  }
}
export default SideNav