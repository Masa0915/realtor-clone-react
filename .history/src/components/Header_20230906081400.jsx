import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul>
            <li>Home</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
