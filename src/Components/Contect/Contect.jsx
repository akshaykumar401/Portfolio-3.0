import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../index.js";
import Conf from "../../Config/Conf.js";

// console.log(Conf.email)

function Contect() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("Email");
    const name = document.getElementById("Name");
    const sublect = document.getElementById("Subject");
    const message = document.getElementById("Your message");

    
  };

  return (
    <div className="px-12 flex justify-center my-6 w-full">
      <div className="dark:bg-slate-200 dark:text-black text-white bg-slate-950 md:w-[80%] lg:w-[70%] md:h-[30rem] rounded-2xl overflow-hidden flex md:justify-around md:flex-row flex-col h-auto justify-center">
        {/* Other Option Div */}
        <div className="md:w-[50%] w-full px-3 h-full md:pt-6 pl-6">
          <div className="w-full h-auto mb-16">
            <h2 className="text-3xl pt-4 font-semibold">Contact us</h2>
            <p className="text-lg pt-4 pl-4">
              Leave your email and we will get back to you within 24 hours
            </p>
          </div>

          <hr className="w-44 h-0.5 mx-auto my-8 bg-gray-800 border-0 rounded-sm md:my-4 dark:bg-gray-700" />

          <div className="pl-8 pt-6 flex flex-col justify-center gap-5">
            <div className="inline-block">
              <Link
                to={"https://www.linkedin.com/in/username"}
                target={"_blank"}
                className="text-2xl text-gray-700 hover:text-blue-600 transition duration-300 ease-in flex gap-2 items-center hover:rotate-3"
              >
                <i class="fa-brands fa-linkedin"></i>
                LinkedIn
              </Link>
            </div>

            <div className="inline-block">
              <Link
                to={"https://www.linkedin.com/in/username"}
                target={"_blank"}
                className="text-2xl text-gray-700 hover:text-blue-400 transition duration-300 ease-in flex gap-2 items-center hover:-rotate-3"
              >
                <i class="fa-brands fa-discord"></i>
                Discord
              </Link>
            </div>

            <div className="inline-block">
              <Link
                to={"https://www.linkedin.com/in/username"}
                target={"_blank"}
                className="text-2xl text-gray-700 hover:text-black transition duration-300 ease-in flex gap-2 items-center hover:rotate-3"
              >
                <i class="fa-brands fa-square-github"></i>
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* Email Option */}
        <form
          className="w-[90%] md:w-[45%] h-[94%] rounded-2xl bg-sky-500 m-4 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <Input type="email" label="Email" require={true} className="mt-12" />

          <Input type="text" label="Name" require={false} className="mt-2" />

          <Input type="text" label="Subject" require={true} className="mt-2" />

          <Input
            type="text"
            label="Your message"
            require={false}
            className="mt-2 "
          />

          <input
            type="Submit"
            className="my-6 w-[90%] h-12 cursor-pointer outline-none rounded-2xl active:scale-95 duration-200 hover:bg-amber-600 bg-amber-700 text-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default Contect;
