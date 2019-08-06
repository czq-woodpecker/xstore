import React, {Component} from 'react';
import Header from "./Header";
import './home.less'
import {Route, Switch} from "react-router-dom";
import AddProduct from "../product/AddProduct";

class Home extends Component {
  render() {
    return (
      <div id={'container'}>
        <Header/>

        <Switch>
          <Route exact path={'/product/add'} component={AddProduct} />
        </Switch>
      </div>
    );
  }
}

export default Home;
