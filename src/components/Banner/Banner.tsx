import * as React from "react";
import "./banner.scss";

type IProps = {
  name: string;
}

export const Banner = ({name}: IProps) => (
    <div className="banner">
      <span className="banner__text">
        Hello {name}!
      </span>
    </div>
  );