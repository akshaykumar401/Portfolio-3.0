import React from "react";
import { 
  Profile,
  Galary, 
  SkillIdicator,
  Contect
} from "../Components";
import { Link } from "react-router-dom";
import {
  WebTodo1,
  WebTodo2,
  WebTodo3,
  WebTodo4,
  WebTodo5,
  WebTodo6,
  WebCal1,
  WebCal2,
  WebCal3,
  WebCal4,
  WebCal5,
  DescCal1,
  DescCal2,
  DescCal3,
  DescCal4,
  DescCal5,
  C,
  Backend,
  CPP,
  DSA,
  Frontend,
  JS,
  MongoDB,
  Mysql,
  PHP,
  Python,
  ReactJS,
} from "../assets/index.js";

function Home() {
  return (
    <div className="w-full h-auto flex flex-col">
      {/* Describe and Image and Contect Icons */}
      <div className="flex py-8 justify-evenly md:flex-row flex-col-reverse items-center md:items-start gap-8 md:gap-0">
        {/* About Contect */}
        <div className="flex flex-col justify-center sm:text-3xl text-2xl pl-4 md:pt-14 pt-0">
          <h1>
            Hi, I'm{" "}
            <span className="dark:text-orange-300 text-sky-600 sm:text-5xl text-3xl font-bold">
              Akshay{" "}
            </span>
            Kumar
          </h1>
          <p className="pl-4 text-xl">Computer Science Enginnring Student</p>
          <p className="pl-4 text-xl">Frontend Developer</p>
          <p className="pl-4 text-xl">Backend Developer</p>
          <p className="pl-4 text-xl">React Developer</p>
          <p className="pl-4 text-xl">Full Stack Developer</p>
        </div>

        {/* Image */}
        <Profile
          imageSrc="https://imgs.search.brave.com/n5br92mlxAkV9iOyPo4wp_X9NCwW32v_8S_E_ap_9SA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbWFnZS1iYXNr/ZXRiYWxsXzkzMTg3/OC00NTAyMTMuanBn"
          name="Profile"
        />

        {/* Contect Icons */}
        <div className="lg:flex flex-col justify-center hidden w-14 rounded-2xl h-96 bg-amber-50">
          <ul className="flex justify-around items-center h-full z-50 flex-col text-gray-600 text-2xl">
            <li className="hover:scale-125 cursor-pointer duration-200 hover:text-black hover:rotate-15">
              <Link
                to="https://www.github.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-square-github"></i>
              </Link>
            </li>
            <li className="hover:scale-125 cursor-pointer duration-200 hover:text-blue-700 hover:rotate-15">
              <Link
                to="https://www.linkedin.com/in/username"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li className="hover:scale-125 cursor-pointer duration-200 hover:text-blue-300 hover:rotate-15">
              <Link
                to="https://www.discord.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-discord"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* All My Projects */}
      <div className="px-4 py-3">
        {/* Heading */}
        <div className="flex items-center gap-3 text-2xl px-3">
          <i class="fa-solid fa-hand-point-right"></i>
          <h2 className="font-bold">Current Time Best Project</h2>
        </div>

        <div className="projects p-6">
          {/* Project 1 */}
          <div className="flex lg:flex-row flex-col lg:justify-center lg:items-start justify-center items-center lg:gap-4 gap-0">
            <div className="projectShow lg:w-[45%] w-full ">
              <Galary
                data={[
                  WebTodo1,
                  WebTodo2,
                  WebTodo3,
                  WebTodo4,
                  WebTodo5,
                  WebTodo6,
                ]}
              />
            </div>

            <div className="projectDescription lg:w-[45%] w-full pl-8 lg:pt-12 ">
              <div className="title flex gap-4 justify-start items-center text-2xl">
                <i class="fa-solid fa-feather-pointed"></i>
                <h2>Web ToDo Application</h2>
              </div>

              <ul className="pl-12 pt-6 flex flex-col gap-3 list-disc">
                <li>
                  ToDo || Notes App Made in `ejs` in <b>Frontend</b>
                </li>
                <li>
                  <b>Backend</b> Node.js, Express, Mongodb Used in This Project
                </li>
                <li>
                  Cheak The Project Source Code{" "}
                  <Link
                    to={"https://github.com/akshaykumar401/Web-ToDo"}
                    target="_blank"
                    className="hover:text-blue-500 duration-200"
                  >
                    <b><u>Web ToDo</u></b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

          {/* Project 2 */}
          <div className="flex lg:flex-row flex-col-reverse lg:justify-center lg:items-start justify-center items-center lg:gap-4 gap-0">
            <div className="projectDescription lg:w-[45%] w-full pl-8 lg:pt-12 ">
              <div className="title flex gap-4 justify-start items-center text-2xl">
                <i class="fa-solid fa-feather-pointed"></i>
                <h2>Web Calculator Application</h2>
              </div>

              <ul className="pl-12 pt-6 flex flex-col gap-3 list-disc">
                <li>
                  Calculator Total <b>Frontend</b> Project.
                </li>
                <li>
                  <b>technology</b> used in Project - `HTML, CSS, JS`
                </li>
                <li>
                  Cheak The Project Directly{" "}
                  <Link
                    to={"https://akshaykumar401.github.io/web-claculator/"}
                    target="_blank"
                    className="hover:text-blue-500 duration-200"
                  >
                    <b><u>Open Project</u></b>
                  </Link>
                </li>
                <li>
                  Cheak The Project Source Code{" "}
                  <Link
                    to={"https://github.com/akshaykumar401/web-claculator"}
                    target="_blank"
                    className="hover:text-blue-500 duration-200"
                  >
                    <b><u>Web Calculator</u></b>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="projectShow lg:w-[45%] w-full ">
              <Galary data={[WebCal1, WebCal2, WebCal3, WebCal4, WebCal5]} />
            </div>
          </div>

          <hr className="w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

          {/* Project 3 */}
          <div className="flex lg:flex-row flex-col lg:justify-center lg:items-start justify-center items-center lg:gap-4 gap-0">
            <div className="projectShow lg:w-[45%] w-full ">
              <Galary
                data={[DescCal1, DescCal2, DescCal3, DescCal4, DescCal5]}
              />
            </div>

            <div className="projectDescription lg:w-[45%] w-full pl-8 lg:pt-12 ">
              <div className="title flex gap-4 justify-start items-center text-2xl">
                <i class="fa-solid fa-feather-pointed"></i>
                <h2>DeskTop Calculator Application</h2>
              </div>

              <ul className="pl-12 pt-6 flex flex-col gap-3 list-disc">
                <li>
                  Desktop Calculator Made in <b>Electron.js</b>
                </li>
                <li>
                  <b>Technology</b> used in Project - `Electron.js, HTML, CSS,
                  JS`
                </li>
                <li>
                  Cheak The Project Source Code{" "}
                  <Link
                    to={"https://github.com/akshaykumar401/Desktop-calculator"}
                    target="_blank"
                    className="hover:text-blue-500 duration-200"
                  >
                    <b><u>Desktop ToDo</u></b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Skill in Languages */}
      <div className="px-4 py-3">
        {/* Heading */}
        <div className="flex items-center gap-3 text-2xl px-3">
          <i class="fa-solid fa-hand-point-right"></i>
          <h2 className="font-bold">Skills....</h2>
        </div>

        <div className="skills flex flex-wrap px-4 gap-2 mt-6">
          <SkillIdicator level="81" name="C " icon={C} />
          <SkillIdicator level="89" name="C++ " icon={CPP} />
          <SkillIdicator level="81" name="java Script" icon={JS} />
          <SkillIdicator level="70" name="PHP " icon={PHP} />
          <SkillIdicator level="75" name="Python " icon={Python} />
          <SkillIdicator
            level="61"
            name="Data Structures and Algorithms"
            icon={DSA}
          />
          <SkillIdicator level="72" name="MySQL" icon={Mysql} />
          <SkillIdicator level="61" name="MongoDB" icon={MongoDB} />
          <SkillIdicator level="75" name="React" icon={ReactJS} />
          <SkillIdicator level="73" name="Backend" icon={Backend} />
          <SkillIdicator level="90" name="Frontend" icon={Frontend} />
        </div>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Contect */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-3 text-2xl px-3">
          <i class="fa-solid fa-hand-point-right"></i>
          <h2 className="font-bold">Contect Me:</h2>
        </div>

        {/* Card For Take email and Message */}
        <Contect />
      </div>
    </div>
  );
}

export default Home;
