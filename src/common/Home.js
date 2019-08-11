import React, {Component} from 'react';
import Header from "./Header";
import './home.less'
import {Route, Switch} from "react-router-dom";
import AddProduct from "../product/AddProduct";
import Products from "../product/Products";
import Orders from "../order/Orders";

class Home extends Component {
  render() {
    return (
      <div id={'container'}>
        <Header/>
        <Switch>
          <Route exact path={'/product/add'} component={AddProduct} />
          <Route exact path={'/products'} component={Products} />
          <Route exact path={'/orders'} component={Orders} />
        </Switch>
      </div>
    );
  }
}

export default Home;
