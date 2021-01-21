import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { AboutMe } from "./pages/AboutMe";
import { Login } from "./pages/login";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <Route exact path="/" component={App} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
