import "core-js";
import React from "react";
import ReactDOM from "react-dom";

import "./src/styles/index.scss";

import CssBaseline from '@material-ui/core/CssBaseline';

import { App } from "./App";


ReactDOM.render(
<CssBaseline><App /></CssBaseline>, document.getElementById("app"));
