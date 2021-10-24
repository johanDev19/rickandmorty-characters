import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Characters from "./pages/characters";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/all">
          <Characters />
        </Route>
        <Route path="/:characterName">
          <Characters />
        </Route>
        <Route path="/">
          <Redirect to="all" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
