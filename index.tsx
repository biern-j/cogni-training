import "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Banner } from "./src/components/Banner";
import { Fixation } from "./src/components/Fixation"

import "./src/styles/global.scss";

ReactDOM.render(
  <div>
    <Banner name="Max" />
    <Fixation />
  </div>,
  document.getElementById("app"),
);