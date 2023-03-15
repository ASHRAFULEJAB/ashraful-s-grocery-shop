import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFilePdf,
  AiOutlineFileExcel,
  AiFillPrinter,
  AiFillCaretDown,
} from "react-icons/ai";
import SingleUser from "./SingleUser";
import { useSelector } from "react-redux";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-hot-toast";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

const AllUser = () => {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState(false);
  const [role, setRole] = useState(false);
  const [plan, setPlan] = useState(false);
  const [status, setStatus] = useState(false);
  const [action, setAction] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //  react pdf
  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);

  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:7000/api/registeruserdata")
        .then((res) => setUserdata(res.data))
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => toast.success("Data saved in PDF"),
  });
  //data fetch

  // const { users } = useSelector((state) => state.users);

  // let allUser;

  // if (users.length > 0) {
  //   allUser = users.map((u) => (
  //     <SingleUser
  //       u={u}
  //       user={user}
  //       email={email}
  //       role={role}
  //       plan={plan}
  //       status={status}
  //       action={action}
  //     ></SingleUser>
  //   ));
  // }

  return (
    <div>
      <section class="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-3 ">
          <div className="flex gap-4">
            <button
              onClick={generatePDF}
              className="px-6 py-1 border rounded-lg text-gray-500 flex items-center  "
            >
              <AiOutlineFilePdf className="mr-2"></AiOutlineFilePdf>PDF
            </button>
            <ReactHtmlTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="AllUser"
              sheet="tablexls"
              buttonText={
                <button className="px-6 pdf-button py-1 border rounded-lg text-gray-500 flex items-center">
                  <AiOutlineFileExcel className="mr-2"></AiOutlineFileExcel>
                  EXCEL
                </button>
              }
            />

            <button className="px-6 py-1 border rounded-lg text-gray-500 flex items-center ">
              <AiFillPrinter className="mr-2"></AiFillPrinter>PRINT
            </button>
            <button className="px-6 py-1 border rounded-lg text-gray-500 ">
              <div className="relative inline-block text-left">
                <div>
                  <div className="flex items-center " onClick={handleToggle}>
                    SHOW/HIDE CLOUMN <AiFillCaretDown></AiFillCaretDown>
                  </div>
                </div>
                {isOpen && (
                  <div className="origin-top-right absolute left-1 right-0 mt-2 w-52 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="flex items-center mx-2">
                        <input
                          onClick={() => setUser(!user)}
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <label className="ml-3" htmlFor="">
                          User
                        </label>
                      </div>
                      <div className="flex items-center mx-2">
                        <input
                          onClick={() => setEmail(!email)}
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <label className="ml-3" htmlFor="">
                          Email
                        </label>
                      </div>
                      <div className="flex items-center mx-2">
                        <input
                          onClick={() => setRole(!role)}
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <label className="ml-3" htmlFor="">
                          Role
                        </label>
                      </div>
                      <div className="flex items-center mx-2">
                        <input
                          onClick={() => setPlan(!plan)}
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <label className="ml-3" htmlFor="">
                          Plan
                        </label>
                      </div>
                      <div className="flex items-center mx-2">
                        <input
                          onClick={() => setStatus(!status)}
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <label className="ml-3" htmlFor="">
                          Status
                        </label>
                      </div>
                      <div className="flex items-center mx-2">
                        <input
                          onClick={() => setAction(!action)}
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <label className="ml-3" htmlFor="">
                          Action
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </button>
          </div>
          <div className="flex gap-3">
            <input
              className="px-4 py-1 border rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Search Here"
            />
            <Link to="/dashboard/adduser">
              <button
                className="px-4 py-1 border rounded-lg text-white inline-flex 
                items-center justify-center h-12 
                 font-medium tracking-wide
                transition duration-200  shadow-md bg-sky-500
                hover:bg-sky-600 focus:shadow-outline focus:outline-none"
              >
                ADD NEW USER
              </button>
            </Link>
          </div>
          <div className="mt-3">
            <table className="table-auto w-full ">
              <thead className="bg-gray-100 w-full rounded-lg text-gray-600">
                <tr></tr>
              </thead>
              <tbody className="border-hidden text-center"></tbody>
            </table>
          </div>
        </div>
        <div ref={conponentPDF} style={{ width: "100%" }}>
          <div class="flex flex-col">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table
                    id="table-to-xls"
                    class=" table min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-100"
                        >
                          <div class="flex items-center gap-x-3">
                            {/* <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          /> */}
                            <button class="flex items-center gap-x-2">
                              <span>
                                {!user && <th className="px-4 py-2">User</th>}
                              </span>

                              <svg
                                class="h-3"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.1"
                                />
                                <path
                                  d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.1"
                                />
                                <path
                                  d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.3"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-100"
                        >
                          {!email && <th className="px-4 py-2">Email</th>}
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-100"
                        >
                          {!role && <th className="px-4 py-2">Role</th>}
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-100"
                        >
                          {!plan && <th className="px-4 py-2">Plan</th>}
                        </th>

                        <th
                          scope="col"
                          text-gray-400
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-100"
                        >
                          {!status && <th className="px-4 py-2">Status</th>}
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500
                         dark:text-gray-100"
                        >
                          {!action && <th className="px-4 py-2">Action</th>}
                        </th>

                        {/* <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Actions</span>
                      </th> */}
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <div class="flex items-center gap-x-2">
                                <img
                                  class="object-cover w-8 h-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                  alt=""
                                />
                                <div>
                                  <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                    Arthur Melo
                                  </h2>
                                </div>
                              </div>
                            </td>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <p class="text-xs font-normal text-gray-600 dark:text-gray-100">
                            authurmelo@example.com
                          </p>
                        </td>

                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          Monthly subscription
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          Monthly subscription
                        </td>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <h2 class="text-sm font-normal">Paid</h2>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button
                              class="btn bg-green-600 p-3 rounded-lg text-gray-500 
                          transition-colors duration-200 dark:hover:text-gray-700 
                          dark:text-gray-200 hover:text-gray-100 focus:outline-none"
                            >
                              Edit
                            </button>

                            <button
                              class="text-gray-100  btn bg-red-600 p-3 rounded-lg
                           transition-colors duration-200 hover:text-gray-200 focus:outline-none"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3065</span>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Jan 5, 2022
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 3L3 9M3 3L9 9"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Cancelled</h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""
                          />
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Andi Lane
                            </h2>
                            <p class="text-xs font-normal text-gray-600 dark:text-gray-100">
                              andi@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            Archive
                          </button>

                          <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr> */}

                      {/* <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3064</span>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Jan 5, 2022
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                            alt=""
                          />
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Kate Morrison
                            </h2>
                            <p class="text-xs font-normal text-gray-600 dark:text-gray-100">
                              kate@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            Archive
                          </button>

                          <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr> */}

                      {/* <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3063</span>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Jan 4, 2022
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80"
                            alt=""
                          />
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Candice Wu
                            </h2>
                            <p class="text-xs font-normal text-gray-600 dark:text-gray-100">
                              candice@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            Archive
                          </button>

                          <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr> */}

                      {/* <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <span>#3062</span>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Jan 4, 2022
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                              stroke="#667085"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <h2 class="text-sm font-normal">Refunded</h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                            alt=""
                          />
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Orlando Diggs
                            </h2>
                            <p class="text-xs font-normal text-gray-600 dark:text-gray-100">
                              orlando@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Monthly subscription
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            Archive
                          </button>

                          <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          <Link
            to="/dashboard/alluser"
            class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </Link>

          <div class="items-center hidden md:flex gap-x-3">
            <Link
              to="/dashboard/alluser"
              class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
            >
              1
            </Link>
            <Link
              to="/dashboard/alluser"
              class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              2
            </Link>
            <Link
              to="/dashboard/alluser"
              class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              3
            </Link>
            <Link
              to="/dashboard/alluser"
              class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              ...
            </Link>
            <Link
              to="/dashboard/alluser"
              class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              12
            </Link>
            <Link
              to="/dashboard/alluser"
              class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              13
            </Link>
            <Link
              to="/dashboard/alluser"
              class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              14
            </Link>
          </div>

          <Link
            to="/dashboard/alluser"
            class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllUser;
