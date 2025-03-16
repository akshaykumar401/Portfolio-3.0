import React from "react";
import { Related, Studing, GBIS, GCR, SBU } from "../assets/Images.js";
import { SkillsContainer } from "../Components/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight, faAward, faSchool, faBuildingColumns, faGraduationCap, faPuzzlePiece, faGamepad, faComputer, faChartLine, faSquareBinary, faLanguage } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="w-full h-auto flex flex-col">
      {/* Row 1 */}
      <div className="flex py-4 px-4 md:px-8 items-center md:flex-row flex-col-reverse md:justify-center">
        <p className="md:w-[47%] w-full px-4 md:px-0 text-xl sm:text-2xl justify-between">
          Hey Every One I'm{" "}
          <b className="text-2xl sm:text-3xl  drop-shadow-[0_2px_3px_#FFEB3B] dark:drop-shadow-[0_2px_3px_#0FFF50]">
            Akshay Kumar
          </b>{" "}
          & I'm Studing at Sarala Birla University with Bachlors of
          Technology(B.Tech) Cource and I Have Depatment in Computer Science
          Enginnering.
        </p>

        <img
          className="w-[75%] sm:w-[55%] md:w-[45%] lg:w-[40%] drop-shadow-[0_2px_3px_black] dark:drop-shadow-[0_2px_3px_white]"
          src={Related}
          alt="Referance Image"
        />
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Row 2 */}
      <div className="flex py-4 px-4 md:px-8 items-center md:flex-row gap-8 flex-col md:justify-center">
        <img
          className="w-[75%] sm:w-[55%] md:w-[45%] lg:w-[40%] drop-shadow-[0_2px_3px_black] dark:drop-shadow-[0_2px_3px_white]"
          src={Studing}
          alt="Referance Image"
        />

        <p className="md:w-[47%] px-4 md:px-0 w-full text-xl sm:text-2xl justify-between">
          I Have Taken Addmission at 2023. and I'm Over Exited to Learn Game{" "}
          <b>Devlopment</b>, <b>Web Devloapment</b>, and <b>Android/IOS</b> App
          Devloapment.
        </p>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Row 3-> Education */}
      <div className="px-4 py-3">
        {/* Heading */}
        <div className="flex items-center gap-4 text-2xl px-3">
          <FontAwesomeIcon icon={faHandPointRight} />
          <h2 className="font-bold">
            Education Qualification.
            <FontAwesomeIcon className="pl-2 text-3xl" icon={faAward} />
          </h2>
        </div>

        <div className="px-12 py-6">
          <div className="title">
            <h4 className="gap-4 font-semibold text-xl sm:text-2xl">
              <FontAwesomeIcon className="pr-4" icon={faSchool} />
              Secondary School Certificate (SSC) at{" "}
              <i>Gautam Buddha International School</i>
            </h4>

            <div className="mt-6 md:mt-0 description pt-4 w-full flex items-center gap-4 md:gap-16 flex-col md:flex-row">
              <img
                src={GBIS}
                alt="Gautam Buddha International School Ranchi."
                className="rounded-2xl drop-shadow-[0_2px_3px_#000] dark:drop-shadow-[0_2px_3px_#FFF]"
              />

              <ul className="text-xl list-disc">
                <li>
                  This is The UnderRated School in Ranchi Jharkhand for Class{" "}
                  <i>Nursery to 10th</i>{" "}
                </li>
                <li>I have Completed My 10th in 2021 in This School.</li>
                <li>I have Got 56.4% in 10th.</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="sm:w-46 w-22 h-0.5 mx-auto my-4 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

        <div className="px-12 py-6">
          <div className="title">
            <h4 className="gap-4 font-semibold text-xl sm:text-2xl">
              <FontAwesomeIcon className="pr-4" icon={faBuildingColumns} />
              Higher Secondary Certificate (HSC) at{" "}
              <i>Gossner College Ranchi</i>
            </h4>

            <div className="mt-6 md:mt-0 description pt-4 w-full flex items-center gap-4 md:gap-4 flex-col-reverse md:flex-row">
              <ul className="text-xl list-disc">
                <li>
                  This is The Average Type Collage in Ranchi Jharkhand. And this
                  Collage is Best for{" "}
                  <i>if you want to do Any Other Activity Also.</i>
                </li>
                <li>I have Completed My 12th in 2023 in This Collage.</li>
                <li>I have Got 55.8% in 12th.</li>
              </ul>

              <img
                src={GCR}
                alt="Gossner College Ranchi."
                className="rounded-2xl drop-shadow-[0_2px_3px_#000] dark:drop-shadow-[0_2px_3px_#FFF] md:w-md"
              />
            </div>
          </div>
        </div>

        <hr className="sm:w-46 w-22 h-0.5 mx-auto my-4 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

        <div className="px-12 py-6">
          <div className="title">
            <h4 className="gap-4 font-semibold text-xl sm:text-2xl">
              <FontAwesomeIcon className="pr-4" icon={faGraduationCap} />
              University at <i>Sarala Birla University.</i>
            </h4>

            <div className="mt-6 md:mt-0 description pt-4 w-full flex items-center gap-4 md:gap-8 flex-col md:flex-row">
              <img
                src={SBU}
                alt="Sarala Birla university Ranchi"
                className="rounded-2xl drop-shadow-[0_2px_3px_#000] dark:drop-shadow-[0_2px_3px_#FFF] md:w-md"
              />

              <ul className="text-xl list-disc">
                <li>
                  This is The Best University in Ranchi Jharkhand. And this
                  B.tech, BBA, BCA, B.com, B.sc, M.tech, M.sc, M.com.{" "}
                </li>
                <li>
                  I have Taken Admission in 2023 in{" "}
                  <i>Bachlors of Technology in Computer Science Enginnering</i>.
                </li>
                <li>
                  Teacher | Dean | Professor are To Good in Teaching. & They are
                  Freandly in Nature..
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Row 4-> Skills Display */}
      <div className="px-2 w-full py-3 mb-6">
        {/* Heading */}
        <div className="flex items-center gap-3 text-2xl px-3">
          <FontAwesomeIcon icon={faHandPointRight} />
          <h2 className="font-bold">Skills....</h2>
        </div>

        <SkillsContainer />
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Row 5-> Hobby */}
      <div className="px-4 py-3 mb-6">
        {/* Heading */}
        <div className="flex items-center gap-3 text-2xl px-3">
          <FontAwesomeIcon icon={faHandPointRight} />
          <h2 className="font-bold">Hobby....</h2>
        </div>

        <div className="py-4 sm:px-16 px-6">
          <p className="text-xl">
            Here are my Some of Hobby{" "}
            <span className="text-2xl pl-2">
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </span>
          </p>

          <ul className="list-disc sm:pl-16 pl-6 pt-4 flex flex-col gap-2 text-lg">
            <li>
              Play Video Games.{" "}
              <FontAwesomeIcon className="text-2xl pl-2" icon={faGamepad} />
            </li>
            <li>
              Create WebSite.{" "}
              <FontAwesomeIcon className="text-2xl pl-2" icon={faComputer} />
            </li>
            <li>
              Learn New Things.{" "}
              <FontAwesomeIcon className="text-2xl pl-2" icon={faChartLine} />
            </li>
            <li>
              Make a Game.{" "}
              <FontAwesomeIcon className="text-2xl pl-2" icon={faSquareBinary} />
            </li>
          </ul>
        </div>
      </div>

      <hr className="sm:w-98 w-44 h-0.5 mx-auto my-2 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

      {/* Row 6-> Language I Know */}
      <div className="px-4 py-3 mb-6">
        {/* Heading */}
        <div className="flex items-center gap-3 text-2xl px-3">
          <FontAwesomeIcon icon={faHandPointRight} />
          <h2 className="font-bold">Language....</h2>
        </div>

        <div className="py-4 sm:px-16 px-6">
          <p className="text-xl">
            The Language I Know{" "}
            <span className="text-2xl pl-2">
              <FontAwesomeIcon icon={faLanguage} />
            </span>
          </p>

          <ul className="list-disc sm:pl-16 pl-6 pt-4 flex flex-col gap-2 text-lg">
            <li>Hindi</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
