import React from "react";

export default function Title() {
  return (
    <div className="lg:flex lg:h-5/6">
      <div className=" w-full lg:w-1/2 h-full grid justify-items-center xl:justify-items-end items-center">
        <div className="w-full lg:w-3/4 p-4 text-white">
          <p className="text-xl lg:text-4xl mb-2">Hi, my name is Ervin</p>
          <p className="text-4xl lg:text-8xl mb-2 text-indigo-400">
            I'm an aspiring full-stack developer.
          </p>
          <p className="text-xl lg:text-4xl mb-8">
            I'm a graduating student from Polytechnic University of the
            Philippines, Majoring in Information Technology.
          </p>
          <a
            href="#about"
            class="comic-button text-md text-center cursor-pointer"
          >
            Learn more about me
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full"></div>
    </div>
  );
}
