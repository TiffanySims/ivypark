import React, { Component } from 'react';
import Home from './home';
import Shop from './Shop';
import Details from './detail';
import{ BrowserRouter, Route,Switch} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >
      <Switch>
      <Route path="/shop" component={Shop}/>
      <Route path="/:id" component={Details}/>
        <Route path="/" component={Home}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
