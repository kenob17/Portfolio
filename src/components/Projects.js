import React from "react";
import proj_icon from "../images/target-icon.png";
import airbender from "../images/airbender.png";
import menupo from "../images/menu-po.png";
import mjewelry from "../images/mjewelry.png";

export default function Projects() {
  return (
    <section className="h-screen mt-10 text-white" id="project">
      {/* Navigation Part */}
      <div className="xl:pl-20">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 p-4 ">
          <img src={proj_icon} />
          <p className="font-bold text-4xl lg:text-5xl ">Projects</p>
        </div>

        {/* Description  */}
        <div className="w-full px-4 text-lg lg:w-3/5 text-md md:text-xl lg:text-2xl">
          <p>
            The following are some of the projects that i made during my college
            days. Some of these are made by group, so i don't take all the
            credits of the said projects.
          </p>
        </div>

        {/* Nav tabs */}
        <div className="p-4">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {/* Project #1 */}
            <li class="nav-item grid justify-items-center" role="presentation">
              <img className="mb-4 w-16 h-16 md:w-20 md:h-20" src={airbender} />
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Airbender
              </button>
            </li>

            {/* Project #2 */}
            <li class="nav-item grid justify-items-center" role="presentation">
              <img className="mb-4 w-16 h-16 md:w-20 md:h-20" src={menupo} />
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Menu-po
              </button>
            </li>

            {/* Project #3 */}
            <li class="nav-item grid justify-items-center" role="presentation">
              <img className="mb-4 w-16 h-16 md:w-20 md:h-20" src={mjewelry} />
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Mjewelry
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Data Part */}
      <div className="bg-project-bg bg-cover flex items-center xl:h-2/3">
        <div class="tab-content" id="pills-tabContent">
          {/* Airbender */}
          <div
            class="tab-pane fade show active "
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="w-full h-full grid justify-items-center p-4">
              <div className="md:w-10/12 2xl:w-4/6 xl:flex  md:gap-8">
                {/* Description Part */}
                <div className="mb-8 xl:mb-0 w-full xl:w-1/2 border-2 border-[#555] rounded-lg">
                  {/* Navbar */}
                  <div className="flex gap-2 p-2 bg-[#555]">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-[#0F172A] text-justify">
                    <p>
                      Airbender is a simple music player that is written in
                      Python. This is a project that we had during our 2nd year
                      in college. I genuinely think this is a cool project, but
                      the layout really sucks! As of it's functionality, it's
                      all working. I think i'll upload the sample video
                      sometime.
                      <br />
                      <br />
                      It also has a "most played" feature where you can see
                      what's your most played music, and some statistics on how
                      many times you played it. Actually, i had a plan to add
                      lyrics on this player but we can't implement it due to
                      time constraint. But yeah... i had fun doing this project
                      not only because it's my first fully functional project,
                      but also i got to work with my classmates/friends.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <p className="p-1 bg-red-500 text-black text-sm font-bold rounded-lg">
                        Python
                      </p>
                      <p className="p-1 bg-yellow-500 text-black text-sm font-bold rounded-lg">
                        PyGame
                      </p>
                      <p className="p-1 bg-green-500 text-black text-sm font-bold rounded-lg">
                        Tkinter
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sample Part */}
                <div className="w-full xl:w-1/2 border-2 border-white rounded-lg">
                  {/* Navbar */}
                  <div className="flex gap-2 p-2 bg-[#F8FBFE]">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-[#0F172A]">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Fugiat ipsa eos aperiam itaque explicabo distinctio
                      accusamus. Possimus deleniti minus deserunt commodi,
                      suscipit non modi blanditiis beatae, facilis recusandae
                      iste totam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu-po */}
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="w-full h-full grid justify-items-center p-4">
              <div className="md:w-10/12 2xl:w-4/6 xl:flex md:gap-8">
                {/* Description Part */}
                <div className="mb-8 xl:mb-0 w-full xl:w-1/2 border-2 border-[#555] rounded-lg">
                  {/* Navbar */}
                  <div className="flex gap-2 p-2 bg-[#555]">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-[#0F172A] text-justify">
                    <p>
                      Menu-po is our capstone project that we created during our
                      4th year in college. Menu-po is a web based ordering and
                      health monitoring app that we created for a private
                      elementary school in San Mateo, Rizal. This app contains
                      ordering, monitoring, inventory, analytics, and report
                      creation functionalities.
                      <br />
                      <br />
                      As for the process, the student must scan the QR code
                      given to them. If the student has a pre-order set, the
                      canteen staff will see it on the screen and just give it
                      to the student. If the student does not have pre-order,
                      the student can choose items from the list that can be
                      seen on the screen. To complete the process, the student
                      must pay the items he/she ordered.
                      {/* <br />
                      <br />I think this is the biggest learning curve i've had.
                      First, we created this project in a conventional way where
                      in we did not implement OOP. We're half-way of development
                      when my groupmates decided to include Laravel on our
                      project. For a week, we stop the development and focused
                      on learning Laravel. I learned so much during that week.
                      And at first, i thought it's just a waste of time since
                      we're half-way on development, but that's one of the times
                      that I'm really thankful that it happened. Because if it
                      didn't, we might still had a decent project but i think
                      it'll costs us some sleepless nights. Implementing Laravel
                      makes our work easy. */}
                    </p>

                    <div className="flex gap-2 mt-2">
                      <p className="p-1 bg-red-500 text-black text-sm font-bold rounded-lg">
                        PHP
                      </p>
                      <p className="p-1 bg-yellow-500 text-black text-sm font-bold rounded-lg">
                        Laravel
                      </p>
                      <p className="p-1 bg-green-500 text-black text-sm font-bold rounded-lg">
                        MySQL
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sample Part */}
                <div className="w-full xl:w-1/2 border-2 border-white rounded-lg">
                  {/* Navbar */}
                  <div className="flex gap-2 p-2 bg-[#F8FBFE]">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-[#0F172A]">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Fugiat ipsa eos aperiam itaque explicabo distinctio
                      accusamus. Possimus deleniti minus deserunt commodi,
                      suscipit non modi blanditiis beatae, facilis recusandae
                      iste totam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mjewelry */}
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="w-full h-full grid justify-items-center p-4">
              <div className="md:w-10/12 2xl:w-4/6 md:flex md:gap-8">
                {/* Description Part */}
                <div className="mb-8 md:mb-0 md:w-1/2 border-2 border-[#555] rounded-lg">
                  {/* Navbar */}
                  <div className="flex gap-2 p-2 bg-[#555]">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-[#0F172A] text-justify">
                    <p>
                      Mjewelry is a side project that i did during my free time
                      in my internship. It's just a simple showcasing web
                      application for someone that i know that has a jewelry
                      business. But i had a plan to make it into a fully
                      functional website with ordering and chats so she can be
                      contacted thru the website.
                      <br />
                      <br />
                      But she don't get to see it yet since i'm still polishing
                      some designs. But i want to finish it by July, so i have
                      time for the improvements that she might want.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <p className="p-1 bg-red-500 text-black text-sm font-bold rounded-lg">
                        HTML
                      </p>
                      <p className="p-1 bg-yellow-500 text-black text-sm font-bold rounded-lg">
                        Tailwind
                      </p>
                      <p className="p-1 bg-green-500 text-black text-sm font-bold rounded-lg">
                        Bootstrap
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sample Part */}
                <div className="md:w-1/2 border-2 border-white rounded-lg">
                  {/* Navbar */}
                  <div className="flex gap-2 p-2 bg-[#F8FBFE]">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-[#0F172A]">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Fugiat ipsa eos aperiam itaque explicabo distinctio
                      accusamus. Possimus deleniti minus deserunt commodi,
                      suscipit non modi blanditiis beatae, facilis recusandae
                      iste totam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
