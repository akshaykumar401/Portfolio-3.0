import React from "react";
import { Hii } from "../assets/Images";
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
} from "../assets/Images.js";
import { Galary } from "../Components/index.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects() {
  return (
    <div className="w-full h-auto flex flex-col">
      {/* Row 1-> Wave and Some Message */}
      <div className="w-full flex justify-around items-center px-8 md:flex-row flex-col-reverse mb-12">
        {/* All Message Container */}
        <div className="md:w-[65%] flex flex-col gap-16 text-2xl">
          <p>
            Hey There I'm <b>Akshay Kumar</b> Here is My Some of My{" "}
            <i>Imagination</i> & Some of My <i>Clone Project</i> Have See.
          </p>

          <p>
            Also This <i>Portfolio</i> is a Part of My Project.
          </p>
        </div>

        {/* Referabce Image */}
        <img
          src={Hii}
          alt="Referance Image"
          className="w-[75%] sm:w-[50%] lg:w-[30%] mt-2"
        />
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Row 2-> Project Div */}
      <div className="px-4 py-3 mb-6">
        {/* Heading */}
        <div className="flex items-center gap-3 text-2xl px-3">
          <FontAwesomeIcon icon="fa-solid fa-hand-point-right" />
          <h2 className="font-bold">Projects....</h2>
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
                <FontAwesomeIcon icon="fa-solid fa-feather-pointed" />
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
                    <b>
                      <u>Web ToDo</u>
                    </b>
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
                <FontAwesomeIcon icon="fa-solid fa-feather-pointed" />
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
                    <b>
                      <u>Open Project</u>
                    </b>
                  </Link>
                </li>
                <li>
                  Cheak The Project Source Code{" "}
                  <Link
                    to={"https://github.com/akshaykumar401/web-claculator"}
                    target="_blank"
                    className="hover:text-blue-500 duration-200"
                  >
                    <b>
                      <u>Web Calculator</u>
                    </b>
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
                <FontAwesomeIcon icon="fa-solid fa-feather-pointed" />
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
                    <b>
                      <u>Desktop ToDo</u>
                    </b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
