import './App.css';
import React from 'react';
import PostsData from './PostsData';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersData from './UsersData';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={PostsData} />
          <Route path='/posts' component={PostsData} />
          <Route path='/users' component={UsersData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
