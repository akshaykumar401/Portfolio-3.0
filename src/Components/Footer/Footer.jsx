import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full h-[35rem] sm:h-78 dark:bg-blue-950 bg-blue-300 dark:text-white text-black mt-20'>
      <div className='sm:flex-row flex-col flex justify-around items-center h-3/4'>
        {/* Icon Brand name */}
        <Link to='/' className='text-3xl font-bold flex justify-center items-center h-full font-sans dark:drop-shadow-[0px_0px_10px_#FFEB55] drop-shadow-[0px_0px_20px_#16FF00] pt-8 sm:pt-0'>
          PORTFOLIO
        </Link>

        {/* Contect Us on -> LinkedIn, Discord, Github */}
        <ul id='contect' className='flex flex-col pt-10 items-center h-full text-lg'>
          <li className='font-semiboldbold text-xl'>Contect On:</li>
          <li className='pt-4 dark:hover:text-blue-500 hover:text-yellow-400'>
            <Link to='https://www.linkedin.com/in/akshay-kumar-2512b529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noreferrer'>
              LinkedIn
            </Link>
          </li>
          <li className='pt-1 dark:hover:text-blue-500 hover:text-yellow-400'>
            <Link to="https://github.com/akshaykumar401" target='_blank' rel='noreferrer'>
              Github
            </Link>
          </li>
          <li className='pt-1 dark:hover:text-blue-500 hover:text-yellow-400'>
            <Link to="https://discord.gg/gSTESUw7" target='_blank' rel='noreferrer'>
              Discord
            </Link>
          </li>
        </ul>

        {/* Top Project URL -> name1, name2, name3 */}
        <ul id='top-projects' className='flex flex-col pt-10  items-center h-full text-lg'>
          <li className='font-semiboldbold text-xl'>Top Projects:
          </li>
        <li className='pt-4 dark:hover:text-blue-500 hover:text-yellow-400'>
            <Link to='https://github.com/akshaykumar401/Web-ToDo' target='_blank' rel='noreferrer'>
              Project 1
            </Link>
          </li>
          <li className='pt-1 dark:hover:text-blue-500 hover:text-yellow-400'>
            <Link to="https://github.com/akshaykumar401/web-claculator" target='_blank' rel='noreferrer'>
              Project 2
            </Link>
          </li>
          <li className='pt-1 dark:hover:text-blue-500 hover:text-yellow-400'>
            <Link to="https://github.com/akshaykumar401/Desktop-calculator" target='_blank' rel='noreferrer'>
              Project 3
            </Link>
          </li>
        </ul>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      <div>
        {/* Copy right */}
        <p className='text-center'>
          &copy; 2021. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer