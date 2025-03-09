import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => { 
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header className='h-[60px] dark:bg-blue-950 bg-blue-300 dark:text-white text-black flex items-center justify-between px-4'>
      <div id="logo" className='w-[200px] h-full'>
        <Link to='/' className='text-3xl font-bold flex justify-center items-center h-full font-sans dark:drop-shadow-[0px_0px_10px_#FFEB55] drop-shadow-[0px_0px_20px_#16FF00]'>
          PORTFOLIO
        </Link>
      </div>

      <div id="list" className='w-[80%] h-full'>
        <ul className='flex justify-around items-center h-full text-lg'>
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : ""} `
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : ""} `
              }
            >
              Project
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contect"
              className={({isActive}) =>
                `${isActive ? "dark:text-green-400 text-fuchsia-700 font-bold" : ""} `
              }
            >
              Contect
            </NavLink>
          </li>

          <li>
            <button onClick={toggleTheme} className='flex items-center justify-center cursor-pointer'>
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.36 4.95l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.36 4.95l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header