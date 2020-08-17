import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import { Link } from '@material-ui/core';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function App() {

const[{user}, dispatch] = useStateValue();

//useEffect <<<<<<<<<<<<<<<<< POWERFUL
//Piece of code which runs based on a given condition

  useEffect(() => {

    const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // the user is logged in ...

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // the user is logged out ...

        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      //Any cleanup operation go here ....
      unsubscribe();
    }

  }, [])

  console.log('User is >>>>>'+user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route path="/">
            <Header/>
            <h1>We're sorry. The Web address you entered is not a functioning page on our site. </h1>
            <h1>Go to Amazon's <Link to="/login" ><span>Home</span></Link> Page </h1>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
