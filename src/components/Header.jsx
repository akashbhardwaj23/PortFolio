import React, { useContext } from "react";
import Component from "./Component";
import picOfMe from "../assets/picofme.png";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

function Header() {
  const { state, setState, themeMode, setThemeMode } = useContext(UserContext);

  const location = useLocation();

  const handleTheme = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  console.log(location);

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

        <div className="md:hidden flex">
          {themeMode === "light" ? (
            <svg
              className="w-10 h-10 text-gray-800 dark:text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 15 20"
              onClick={() => setThemeMode("dark")}
            >
              <path d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z" />
            </svg>
          ) : (
            <svg
              class="w-10 h-10 text-gray-800 dark:text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
              onClick={() => setThemeMode("light")}
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
            </svg>
          )}
        </div>

        <div className="main-content">
          <ul className="md:flex hidden items-center ">
            <li className="list-none ">
              <Link>
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
            <li className="p-6 cursor-pointer">
              {themeMode === "light" ? (
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 20"
                  onClick={() => setThemeMode("dark")}
                >
                  <path d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z" />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                  onClick={() => setThemeMode("light")}
                >
                  <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
                </svg>
              )}
            </li>
          </ul>

          <div className="md:hidden flex mr-4">
            {state ? (
              <svg
                onClick={() => setState((prev) => !prev)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setState((prev) => !prev)}
                xmlns="http://www.w3.org/2000/svg"
                fill="current"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
