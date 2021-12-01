import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sessions from "./views/Sessions";
import Home from "./views/Home";
import CreateSession from "./views/CreateSession";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";

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
        <Route exact strict path="/login">
          <Login />
        </Route>
        <Route exact strict path="/register">
          <Register />
        </Route>
        <Route exact strict path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
