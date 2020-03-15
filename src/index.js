import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";

ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">user</Link>
      </li>
      <li>
        <Link to="/profile">profile</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact="true" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
      <Redirect from="/home" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
