import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Welcome from "../welcome/Welcome";
import PeopleList from "../people/PeopleList";
import Profile from "../profile/Profile";

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
