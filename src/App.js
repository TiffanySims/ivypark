import React, { Component } from 'react';
import Home from './home';
import Shop from './Shop';
import Details from './detail';
import products from './reducers/shop_reducer'
import{ BrowserRouter, Route,Switch} from 'react-router-dom';



class App extends Component {

  state={
    products,
    
  }
  render() {
    return (
      <BrowserRouter>
      <div >
      <Switch>
    <Route path="/shop" component={(props)=> <Shop {...props} products={this.state.products}/>}/>
      <Route path="/:id" component={(props)=> <Details {...props} products={this.state.products}/>}/>
        <Route path="/" component={Home}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
