import { faBars, faXmark, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const off = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropDownContainer">
      <div onClick={toggling} className="DropDownHeader">
        <FontAwesomeIcon className="bars" icon={faBars} />
      </div>
      {isOpen && (
        <div className="DropDownListContainer">
          <div onClick={off} className="DropDownHeadera">
            <FontAwesomeIcon className="bars " icon={faXmark} />
          </div>
          <ul className="DropDownList">
            <li onClick={off} className="loginMb">
              <LoginMobile />
            </li>
            <li onClick={off} className="listItem">
              <Link className="linkDrop" to="/">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </li>
            <li onClick={toggling} className="listItem">
              <Link className="linkDrop" to="/markets">
                Markets
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
