import React from "react";

import "./Header.css"
import logoUrl from "../../asstets/logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={logoUrl} alt="Tesla"/>
    </div>
  );
}

export default Header;
