import React from "react";
import Component from "./Component";
import picOfMe from '../assets/picofme.png'
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="fixed w-full z-50 bg-white shadow-3xl dark:bg-gray-700 ">
      <div className="flex items-center justify-between py-4 md:px-20 px-10">
        <div className="hover:text-purple-600 flex items-center text-gray-700 dark:text-white cursor-pointer transition-colors duration-300 ease-linear delay-0">
          <div className="picofme w-20 h-20 rounded-3xl overflow-hidden mr-6 bg-purple-700">
            <img
              src={picOfMe}
              alt=""
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <Link to={''} spy={true} smooth={true} offset={50} duration={500}><span className="text-2xl uppercase font-bold tracking-wide">
            Akash Kumar Bhardwaj
          </span></Link>
        </div>

        <div className="main-content">
          <ul className="md:flex hidden ">
            <li className="list-none ">
              <Link to={""} spy={true} smooth={true} offset={50} duration={500}>
                <Component name={"Home"} />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Component name={"About"} />
              </Link>
            </li>
            <li>
              <Component name={"Project"} />
            </li>
            <li>
              <Link to={"/contact"}>
                <Component name={"Contact"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
     
    </header>
  );
}

export default Header;
