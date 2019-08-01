import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shop";
import signinPage from "./pages/signinPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={signinPage} />
      </Switch>
    </div>
  );
}

export default App;
