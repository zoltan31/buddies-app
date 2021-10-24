import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sessions from "./views/Sessions";
import Home from "./views/Home";
import CreateSession from "./views/CreateSession";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/">
          <Home />
        </Route>
        <Route exact strict path="/sessions">
          <Sessions />
        </Route>
        <Route exact strict path="/sessions/create">
          <CreateSession />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
