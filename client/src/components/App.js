import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Welcome from "./Welcome";
import PeopleList from "./PeopleList";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/users" exact component={PeopleList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
