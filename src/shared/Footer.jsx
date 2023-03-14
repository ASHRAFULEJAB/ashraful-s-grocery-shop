import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/add-to-cart.png";

const Footer = () => {
  return (
    <div>
      <div class="bg-gray-900 dark:bg-white mt-6">
        <div class="container px-6 py-12 mx-auto">
          <hr class="h-px bg-gray-500 border-none mb-3  dark:bg-gray-200" />
          <div class="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1
              class="text-xl font-semibold tracking-tight
             text-gray-100 md:mx-3 xl:text-2xl dark:text-gray-800"
            >
              Subscribe our newsletter to get update.
            </h1>

            <div class="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <Link
                to="/signup"
                class="inline-flex items-center justify-center w-full px-4 py-2 text-sm
                 text-white duration-300 bg-gray-800 rounded-lg gap-x-3
                  hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span>Sign Up Now</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p class="font-semibold text-gray-100 dark:text-gray-800">
                Quick Link
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 
                  dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Who We Are
                </Link>
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-100 dark:text-gray-800">
                Industries
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </Link>
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Information Technology
                </Link>
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </Link>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-100 dark:text-gray-800">
                Services
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Translation
                </Link>
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Proofreading & Editing
                </Link>
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  AI Content Creation
                </Link>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-gray-800">
                Contact Us
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  +880 768 473 4978
                </Link>
                <Link
                  to="/"
                  class="text-gray-100 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  info@aide.com
                </Link>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div class="flex flex-col items-center justify-between sm:flex-row">
            <Link to="/">
              <div className="flex">
                <img className="w-auto h-7" src={logo} alt="" />
                <h1 className="text-2xl ml-3  font-bold tracking-wide text-white dark:text-gray-800 uppercase">
                  {" "}
                  Ashraful's Grocery Shop
                </h1>
              </div>
            </Link>

            <p class="mt-4 text-sm text-gray-100 sm:mt-0 dark:text-gray-700">
              © Copyright 2023-2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
