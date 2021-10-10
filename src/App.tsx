import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Buddies from "./views/Buddies";
import Find from "./views/Find";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/">
          <Home />
        </Route>
        <Route exact strict path="/find">
          <Find />
        </Route>
        <Route exact strict path="/buddies">
          <Buddies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
