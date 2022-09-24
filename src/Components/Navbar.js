import React, { useState, useContext } from "react";
// import  RouterState  from "./Contexts/RouterState";
import RouterContext from './Contexts/RouterContext'

const Navbar = () => {
  const routerState = useContext(RouterContext);
  // console.log(routerState);
  const { location, setLocation } = routerState;
  // const [location, setLocation] = useState("");
  return (
    <nav className="col-span-1 p-1 flex flex-col items-center pt-3">
      {/*  <nav className="border border-solid "> */}
      <ul className="">
        <li className="list-none mb-9 ">
          <a href="">
            <img
              src="https://img.icons8.com/clouds/52/000000/bbb.png"
              alt="logo"
            />
          </a>
        </li>
        <li
          className={`text-center list-none my-5 ${
            location == "msgs" ? `border-r-2` : ""
          }`}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setLocation("msgs");
            }}
          >
            <img
              className="mx-auto"
              src="https://img.icons8.com/doodle/36/FFFFFF/topic--v1.png"
            />
          </a>
        </li>
        <li
          className={`text-center list-none my-5 ${
            location == "peeps" ? `border-r-2` : ""
          }`}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setLocation("peeps");
            }}
          >
            <img
              className="mx-auto"
              src="https://img.icons8.com/plasticine/36/000000/user-group-man-man.png"
            />
          </a>
        </li>
        <li
          className={`text-center list-none my-5 ${
            location == "find" ? `border-r-2` : ""
          }`}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setLocation("find");
            }}
          >
            <img
              className="mx-auto"
              src="https://img.icons8.com/plasticine/36/000000/search.png"
            />
          </a>
        </li>
        <li
          className={`text-center list-none my-5 ${
            location == "setting" ? `border-r-2` : ""
          }`}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setLocation("setting");
            }}
          >
            <img
              className="mx-auto"
              src="https://img.icons8.com/doodle/48/000000/apple-settings.png"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
