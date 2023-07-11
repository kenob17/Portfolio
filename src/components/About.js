import React from "react";
import icon from "../images/profile-icon.png";
import joji from "../images/joji-icon.png";

export default function About() {
  return (
    <section className="w-screen text-white mb-8 xl:pl-20" id="about">
      {/* Title */}
      <div className="flex items-center gap-2 p-4 ">
        <img src={icon} />
        <p className="font-bold text-4xl lg:text-5xl ">About me</p>
      </div>

      {/* Profile */}
      <div className="grid justify-items-center">
        {/* Image */}
        <div className="">
          <img
            className="w-24 h-24 md:w-40 md:h-40 bg-indigo-700 mb-4 rounded-full"
            src={joji}
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-11/12 lg:w-10/12 2xl:w-2/3 h-full md:flex justify-between gap-8">
          {/* Left side */}
          <div className="w-full">
            {/* First */}
            <div className=" mb-8 md:mb-0 md:w-full border-2 border-[#555] rounded-lg">
              {/* Navbar */}
              <div className="flex gap-2 p-2 bg-[#555]">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="p-4 text-justify">
                <p>
                  I've spent most of my college days watching video tutorials on
                  YouTube until i realized that i can't really learn from it if
                  i don't make something out of it. These days, i spend my time
                  on planning on what projects that i would like to make, and
                  the outline of those projects. I really want to make a movie
                  review website just like Letterboxd, i just lack of that
                  'creative juice' to create a design for that.
                </p>
              </div>
            </div>

            {/* Second Empty */}
            <div className="h-40 hidden md:block mb-8 md:mb-0 md:w-full"></div>

            {/* Third */}
            <div className=" mb-8 md:mb-0 md:w-full border-2 border-[#F8FBFE] rounded-lg">
              {/* Navbar */}
              <div className="flex gap-2 p-2 bg-[#F8FBFE]">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="p-4 text-justify">
                <p>
                  Speaking of games, i played a 100+ hours of Stardew Valley.
                  And it really inspired me to the point that i want my
                  portfolio to be Stardew Valley themed, but it's hard man... I
                  tried making a layout of it, but i really sucked at designing.
                  My plan now is to make my Blog Website to be Stardew Valley
                  themed, i guess it would require less 'creative juice' to make
                  it hehe.
                </p>
              </div>
            </div>
          </div>

          {/* Middle line */}
          <div className="hidden md:block border-x-2 h-full"></div>

          {/* Right side */}
          <div className="w-full">
            {/* First Empty*/}
            <div className="hidden md:block h-40 mb-8 md:mb-0 md:w-full"></div>

            {/* Second */}
            <div className=" mb-8 md:mb-0 md:w-full border-2 border-[#F8FBFE] rounded-lg">
              {/* Navbar */}
              <div className="flex gap-2 p-2 bg-[#F8FBFE]">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="p-4 text-justify">
                <p>
                  In my leisure time, i like to watch tv-series like Breaking
                  Bad, Peaky Blinders, The Bear, House MD, etc. But what I'd
                  like to spend my leisure time the most is by playing games.
                  For me, it act as a coping mechanism against the sadness that
                  reality brings us. It transfers our consciousness into a world
                  that we created, in the world that we have control. Where we
                  feel valued, loved, and cared.
                </p>
              </div>
            </div>

            {/* Third Empty*/}
            <div className="hidden md:block h-40 mb-8 md:mb-0 md:w-full"></div>

            {/* Fourth */}
            <div className="mb-8 md:mb-0 md:w-full border-2 border-[#555] rounded-lg">
              {/* Navbar */}
              <div className="flex gap-2 p-2 bg-[#555]">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="p-4 text-justify">
                <p>
                  On top of these things, I would like for me to become
                  successful. I mean... that's must be our goal in life, right?
                  To become successful at something... something that makes us
                  happy. Something that will change our life for good. Something
                  that you can be proud of. Something that will give my family,
                  especially my Mom, the life she deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
