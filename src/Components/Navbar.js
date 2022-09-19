import React,{useState} from "react";


const Navbar = () => {
  
  const [currentMenu, setCurrentMenu] = useState('')
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
            currentMenu == "msgs" ? `border-r-2` : ""
          }`}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setCurrentMenu("msgs");
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
            currentMenu == "peeps" ? `border-r-2` : ""
          }`}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setCurrentMenu("peeps");
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
            currentMenu == "find" ? `border-r-2` : ""
          }`}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setCurrentMenu("find");
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
            currentMenu == "setting" ? `border-r-2` : ""
          }`}
        >
         <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setCurrentMenu("setting");
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
