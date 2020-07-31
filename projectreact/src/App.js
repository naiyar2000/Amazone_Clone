import React, { useContext, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { StateContext } from "./Context/StateProvider";
import { auth } from './firebase'

function App() {

  const [{user}, dispatch] = useContext(StateContext);

  //Piece of code which runs based on a given condition  //useEffect 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //the user is logged in...

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      //Any change operations go in here....
      unsubscribe();
    }

  }, [dispatch])

  console.log("user is ---->", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
