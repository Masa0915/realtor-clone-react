import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header
        className="flex justify-between items-center px-3 max-w-6xl mx-auto bg-gray-300
      
      "
      >
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex bg-slate-200 space-x-10">
            <li
              className={`cursor-pointer cupcuy-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
            >
              Home
            </li>
            <li
              className={`cursor-pointer cupy-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer cupy-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
