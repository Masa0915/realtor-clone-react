import React from "react";

export default function Header() {
  return (
    <div className="bg-white border-b">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto bg-gray-300">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex bg-slate-200 space-x-10">
            <li>Home</li>
            <li>Offers</li>
            <li>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
