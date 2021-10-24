import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./pages/Characters";

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
