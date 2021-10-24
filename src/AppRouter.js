import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./pages/characters";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Characters />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
