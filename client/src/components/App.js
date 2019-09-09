import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
