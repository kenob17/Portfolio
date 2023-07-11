import React from "react";

export default function Header() {
  return (
    <header>
      <nav class="border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "logo192.png"}
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ervin.me
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium px-4 bg-gray-500 gap-20 text-center md:flex md:bg-transparent rounded-xl">
              <li>
                <a
                  href="#about"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <button
                  data-modal-target="authentication-modal"
                  data-modal-toggle="authentication-modal"
                  href="#"
                  class="block py-2 mx-auto text-center pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </button>

                {/* Modal */}
                <div
                  id="authentication-modal"
                  tabindex="-1"
                  aria-hidden="true"
                  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div class="relative w-full max-w-md max-h-full">
                    <div class="relative rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="authentication-modal"
                      >
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                      <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                          Get in touch with me!
                        </h3>
                        <form class="space-y-6" action="#">
                          {/* Name */}
                          <div>
                            <label
                              for="name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          {/* Email */}
                          <div>
                            <label
                              for="email"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="johndoe@gmail.com"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="password"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Message
                            </label>
                            <textarea
                              type="text"
                              name="description"
                              id="description"
                              placeholder="Hope you're having a wonderful day!"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              required
                            />
                          </div>
                          <button class="w-full comic-button text-md text-center">
                            Get in touch!
                          </button>
                          <div class="grid justify-items-center text-gray-500 dark:text-gray-300">
                            <p className="text-lg">Contact me in my socials!</p>
                            <div className="flex text-xl gap-4 mt-2">
                              <a
                                href="https://m.me/Bautista.Ervin"
                                target="_blank"
                              >
                                <i class="fa-brands fa-facebook-messenger"></i>
                              </a>

                              <a
                                href="https://discord.com/users/651399109332303883"
                                target="_blank"
                              >
                                <i class="fa-brands fa-discord"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/erbinb14/"
                                target="_blank"
                              >
                                <i class="fa-brands fa-instagram"></i>
                              </a>
                              <a
                                href="https://www.linkedin.com/in/ervin-bautista-dev/"
                                target="_blank"
                              >
                                <i class="fa-brands fa-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
