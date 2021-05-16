import "core-js";
import React from "react";
import ReactDOM from "react-dom";

import "./src/styles/index.scss";

import CssBaseline from "@material-ui/core/CssBaseline";

import { App } from "./App";
import { Providers } from "./Providers";

ReactDOM.render(
  <Providers>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Providers>,
  document.getElementById("app")
);
