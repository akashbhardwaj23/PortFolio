import React from "react";
import Component from "./Component";
import {Link} from 'react-router-dom'

function Header() {
  // const navigate = useNavigate();

  return (
    <header className="fixed w-full z-50 bg-white shadow-3xl dark:bg-gray-700 ">
      <div className="flex items-center justify-between py-4 px-20">
        <div className="hover:text-purple-600 flex items-center text-gray-700 dark:text-white cursor-pointer transition-colors duration-300 ease-linear delay-0">
          <div className="w-20 h-20 rounded-3xl overflow-hidden mr-6 bg-purple-700">
            <img src="src/assets/picofme.png" alt=""  className="w-full h-full object-cover object-center block"/>

          </div>
          <span className="text-2xl uppercase font-bold tracking-wide">Akash Kumar Bhardwaj</span>
        </div>

        <div className="main-content">
        <ul className="flex ">
            <li className="list-none ">
              <Link to={''} spy= {true} smooth={true} offset={50} duration={500}>
              <Component name={"Home"}/>
              </Link>
               
            </li>
            <li><Link to='/about' spy= {true} smooth={true} offset={50} duration={500}>
            <Component name={"About"}/>
            </Link>
            </li>
            <li>
            <Component name={"Project"}/>
            </li>
            <li><Link to={'/contact'}>
            <Component name={"Contact"}/>
            </Link>
            </li>

        </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
