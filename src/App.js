import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./common/Home";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
