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
import LogIn from './components/Log-In/LogIn';
import Shipment from './components/Shipment/Shipment';




function App() {
  return (
    <div>
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
          <Route  path = '/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route  path = '/login'>
            <LogIn></LogIn>
          </Route>
          <Route  path = '/shipment'>
            <Shipment></Shipment>
          </Route>
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
      
      
      
        
      
    </div>
  );
}

export default App;
