import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "components/header/Header";
import Menu from "components/menu/Menu";
import Welcome from "components/welcome/Welcome";
import PeopleList from "components/people";
import Profile from "components/profile";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/users" exact component={PeopleList} />
          <Route path="/users/:id" exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
