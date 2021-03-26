import React from "react";
import style from "./navbar.module.scss";
import { ReactComponent as LIlogo } from "./navlogos/linkedin.svg";
import { ReactComponent as GHlogo } from "./navlogos/github.svg";
import { ReactComponent as GMLogo } from "./navlogos/gmail.svg";
const Navbar = () => {
  return (
    <div className={style["container"]}>
      <div className={style["contact-icon-container"]}>
        <LIlogo className={style["contact-icon"]} />
        <GHlogo className={style["contact-icon"]} />
        <GMLogo className={style["contact-icon"]} />{" "}
        <div className={style["divider-line"]}></div>
      </div>
    </div>
  );
};

export default Navbar;
