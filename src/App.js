import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
