import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, HashRouter as Router } from 'react-router-dom'
import './styles/index.css';
import './styles/milligram.min.css';
import TopNav from './components/nav/top'
import SideNav from './components/nav/side'
import BooksList from './components/books/list'
import CurrentlyReading from './components/books/current-reading'
import WishList from './components/books/wish-list'

const routing = (
    <Router>
      <div>
        <Route exact  path="/" component={BooksList} />
        <Route path="/books" component={BooksList} />
        <Route path="/wish-list" component={WishList} />
        <Route path="/currently-reading" component={CurrentlyReading} />
      </div>
    </Router>
  );
  ReactDOM.render(<TopNav />, document.getElementById('top-nav'))
  ReactDOM.render(<SideNav />, document.getElementById('side-nav'))
  ReactDOM.render(routing, document.getElementById('main'))
  
