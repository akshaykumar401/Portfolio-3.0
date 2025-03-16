import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Switch } from "../index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Header() {
  document.addEventListener('click', (event) => {
    const menu = document.getElementById("list");
    const menuButton = document.getElementById("menu");
  
    if (menu && menuButton && !menuButton.contains(event.target) && !menu.contains(event.target)) {
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        menu.classList.remove('flex', 'flex-col', 'items-center', "py-20", "w-[250px]", "h-screen", "bg-blue-300", "dark:bg-blue-950", "text-black", "dark:text-white", "fixed", "top-0", "right-0", "transition-all", "duration-200", "gap-4");
      }
    }
  });

  
  const displayMenu = () => {
    const menu = document.getElementById("list");
    
    if (window.innerWidth < 768) {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex', 'flex-col', 'items-center', "py-20", "w-[250px]", "h-screen", "bg-blue-300", "dark:bg-blue-950", "text-black", "dark:text-white", "fixed", "top-0", "right-0", "transition-all", "duration-200");
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex', 'flex-col', 'items-center', "py-20", "w-[250px]", "h-screen", "bg-blue-300", "dark:bg-blue-950", "text-black", "dark:text-white", "fixed", "top-0", "right-0", "transition-all", "duration-200", "gap-4");
      }
    }
  }

  return (
    <header className='h-[60px] dark:bg-blue-950 bg-blue-300 dark:text-white text-black flex items-center justify-between px-4'>
      <div id="logo" className='w-[200px] h-full'>
        <Link to='/' className='text-3xl font-bold flex justify-center items-center h-full font-sans dark:drop-shadow-[0px_0px_10px_#FFEB55] drop-shadow-[0px_0px_20px_#16FF00]'>
          PORTFOLIO
        </Link>
      </div>

      {/* For Larger Screen */}
      <div className='w-[80%] h-full'>
        <ul id='list' className='hidden md:flex md:justify-around md:items-center md:h-full md:text-lg z-50'>
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : "dark:hover:text-yellow-200 hover:text-gray-500 "} duration-250`
              }
            >
              Home
            </NavLink>
          </li>

          <hr className="md:hidden w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />

          <li>
            <NavLink
              to="/about"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : "dark:hover:text-yellow-200 hover:text-gray-500"} duration-250`
              }
            >
              About
            </NavLink>
          </li>

          <hr className="md:hidden w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />


          <li>
            <NavLink
              to="/projects"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : "dark:hover:text-yellow-200 hover:text-gray-500"} duration-250`
              }
            >
              Project
            </NavLink>
          </li>

          <hr className="md:hidden w-48 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />


          <li>
            <NavLink
              to="/contect"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : "dark:hover:text-yellow-200 hover:text-gray-500"} duration-250`
              }
            >
              Contect
            </NavLink>
          </li>

          <hr className="md:hidden w-48 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />


          <li>
            <Switch />
          </li>
        </ul>
      </div>

      {/* For Smaller Screen */}
      <div id="menu" className='w-[40px] h-full flex justify-center items-center md:hidden z-50'>
        <button className='text-2xl cursor-pointer hover:text-gray-500 dark:hover:text-yellow-200' onClick={displayMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
      </div>
    </header>
  )
}

export default Header