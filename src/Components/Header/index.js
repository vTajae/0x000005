import React from 'react';
import coverImage from "../../assets/logo.svg";

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Qias.Me</h1>
      <img src={coverImage} width="100px" alt="wooden background"></img>

      {props.children}
    </header>
  );
}

export default Header;
