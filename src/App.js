import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/Notfound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Product from './components/Product/Product';

import Shipment from './components/Shipment/Shipment';
import LogIn from './components/LogIn/LogIn';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const userContext =  createContext();

function App(props) {
  const [loggedInUser,setloggedInUser] = useState({})
  return (
    <userContext.Provider value = {[loggedInUser,setloggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
      <Header></Header>
      <Router>
        <Switch>
          <Route  path = '/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>

          </Route>
           {/* <Route exact path='/manage'>
            <Manage></Manage> 

          </Route> */}
          <PrivateRoute  path = '/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>
          <Route  path = '/login'>
            <LogIn></LogIn>
          </Route>
          <PrivateRoute  path = '/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path = '/'>
            <Shop></Shop>

          </Route>
          <Route  path='/product/:productKey'>
            <ProductDetail></ProductDetail>

          </Route>
          <Route path ='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      
      
        
      
    </userContext.Provider>
  );
}

export default App;
