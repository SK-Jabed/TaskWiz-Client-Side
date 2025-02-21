import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section className="bg-gray-800 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Organize, Prioritize, and Conquer
              <span className="sm:block"> Your Tasks with Ease. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-3xl sm:text-base/relaxed text-gray-300">
              Take control of your tasks with our sleek Task Manager. Organize,
              prioritize, and track your progress effortlessly with real-time
              updates and a seamless drag-and-drop experience!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
                to={"/dashboard/taskBoard"}
              >
                Get Started
              </Link>

              {/* <a
                className="block w-full rounded-sm border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
