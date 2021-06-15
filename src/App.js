import React from "react";
import Home from "./Components/Main/Home";
import Looks from "./Components/Lookbook/Looks";
import Details from "./Components/Lookbook/Detail";

import Likes from "./Components/Wishlist/Likes";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/wish' component={(props) => <Likes />} />
          <Route path='/looks' component={(props) => <Looks />} />
          <Route path='/:id' component={(props) => <Details />} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
