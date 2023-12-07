import React, { useContext, useState } from "react";
import Component from "./Component";
import picOfMe from "../assets/picofme.png";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function Header() {
  const { state, setState } = useContext(UserContext);

  return (
    <header className="fixed w-full z-50 bg-white shadow-3xl dark:bg-gray-700 ">
      <div className="flex items-center justify-between py-4 md:px-20 px-4">
        <div className="hover:text-purple-600 flex items-center text-gray-700 dark:text-white cursor-pointer transition-colors duration-300 ease-linear delay-0">
          <div className="picofme w-20 h-20 rounded-3xl overflow-hidden mr-6 bg-purple-700">
            <img
              src={picOfMe}
              alt=""
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <Link to={""} spy={true} smooth={true} offset={50} duration={500}>
            <span className="text-2xl uppercase font-bold tracking-wide">
              Akash Kumar Bhardwaj
            </span>
          </Link>
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
              <Link to={"/projects"}>
                <Component name={"Project"} />
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                <Component name={"Contact"} />
              </Link>
            </li>
          </ul>

          <div className="md:hidden flex mr-4">
            {state ? (
              <svg
              onClick={() => setState((prev) => (!prev))}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setState((prev) => !prev)}
                xmlns="http://www.w3.org/2000/svg"
                fill="current"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
