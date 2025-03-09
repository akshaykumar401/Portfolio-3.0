import React from 'react'
import { Profile } from "../Components"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='w-full h-screen flex flex-col'>
      {/* Describe and Image and Contect Icons */}
      <div className='flex py-8 justify-evenly md:flex-row flex-col items-center md:items-start gap-8 md:gap-0'>
        {/* About Contect */}
        <div className='flex flex-col justify-center sm:text-3xl text-2xl pl-4 md:pt-14 pt-0'>
          <h1>Hi, I'm <span className='dark:text-orange-300 text-sky-600 sm:text-5xl text-3xl font-bold'>Akshay </span>Kumar</h1>
          <p className='pl-4 text-xl'>Computer Science Enginnring Student</p>
          <p className='pl-4 text-xl'>Frontend Developer</p>
          <p className='pl-4 text-xl'>Backend Developer</p>
          <p className='pl-4 text-xl'>React Developer</p>
          <p className='pl-4 text-xl'>Full Stack Developer</p>
        </div>

        {/* Image */}
        <Profile imageSrc="https://imgs.search.brave.com/n5br92mlxAkV9iOyPo4wp_X9NCwW32v_8S_E_ap_9SA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbWFnZS1iYXNr/ZXRiYWxsXzkzMTg3/OC00NTAyMTMuanBn" name="Profile"/>

        {/* Contect Icons */}
        <div className='lg:flex flex-col justify-center hidden w-14 rounded-2xl h-96 bg-amber-50'>
          <ul className='flex justify-around items-center h-full z-50 flex-col text-gray-600 text-2xl'>
            <li className='hover:scale-125 cursor-pointer duration-200 hover:text-black'>
              <Link
                to='https://www.github.com'
                target='_blank'
                rel='noreferrer'
              >
                <i class="fa-brands fa-square-github"></i>
              </Link>
            </li>
            <li className='hover:scale-125 cursor-pointer duration-200 hover:text-blue-700'>
              <Link
                to='https://www.linkedin.com/in/username'
                target='_blank'
                rel='noreferrer'
              >
                <i class="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li className='hover:scale-125 cursor-pointer duration-200 hover:text-blue-300'>
              <Link
                to='https://www.discord.com'
                target='_blank'
                rel='noreferrer'
              >
                <i class="fa-brands fa-discord"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-100 border-0 rounded-sm md:my-4 dark:bg-gray-700" />
      
      {/* All My Projects */}
      <div className='px-4 py-3'>
        {/* Heading */}
        <div id="heading" className='flex items-center gap-3 text-2xl px-3'>
          <i class="fa-solid fa-hand-point-right"></i>
          <h2 className='font-bold'>Current Time Best Project</h2>
        </div>
      </div>

      {/* Skill in Languages */}
      <div></div>

      {/* Contect */}
      <div></div>
    </div>
  )
}

export default Home