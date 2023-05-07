import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carts from './pages/Cart';
// import Order from './pages/Order';
import Order from './pages/Order';
import SignUp from './pages/Login';
import Book from './pages/Book2'
import User from './pages/User'
// import Administrator from './pages/Administrator';

window.localStorage.booklist = JSON.stringify([]);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={SignUp} />
          <Route path='/Home' exact component={Home} />
          <Route path='/Carts' component={Carts} />
          {/*<Route path='/Login' component={Login} />*/}
          <Route path='/Book' component={Book} />
          <Route path='/User' component={User} />
          <Route path='/Order' component={Order} />
          {/*<Route path ='/Administrator' component={Administrator}/>*/}
        </Switch>
      </Router>
    </>
  );
}

export default App;
