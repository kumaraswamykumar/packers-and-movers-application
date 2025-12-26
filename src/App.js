import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoveDetailsPage from "./pages/MoveDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/move/:id" component={MoveDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
