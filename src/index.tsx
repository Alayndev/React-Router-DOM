import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRouter } from "router/router";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <AppRouter />
  </HashRouter>,
  document.getElementById("root")
);

// HashRouter instead of BrowserRouter because of GitHub Pages