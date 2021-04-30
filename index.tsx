import "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Banner } from "./src/components/Banner/Banner";
import "./src/styles/global.scss";

ReactDOM.render(
  <div>
    <Banner name="Max" />
  </div>,
  document.getElementById("app"),
);