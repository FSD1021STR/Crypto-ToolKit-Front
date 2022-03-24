import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginMobile from "../loginMobile/loginMobile";

import "./dropDown.mobile.css";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
    console.log(toggling);
    console.log(isOpen);
  };

  return (
    <div className="dropDownContainer">
      <div onClick={toggling} className="DropDownHeader">
        Menu
      </div>
      {isOpen && (
        <div className="DropDownListContainer">
          <div onClick={toggling} className="DropDownHeader">
            X
          </div>
          <ul className="DropDownList">
            <li onClick={toggling} className="listItem">
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggling} className="listItem">
              <Link to="/markets">Markets</Link>
            </li>
            <li onClick={toggling} className="listItem">
              <LoginMobile />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
