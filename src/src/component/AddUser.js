import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../contexts/AuthContext/AuthProvider";
import { addToUser } from "../redux/features/users/userSlice";

const AddUser = () => {
  const condition = ["Active", "Pending", "Inactive"];
  const roles = ["Admin", "Editor", "Author", "Maintianer", "Subscriber"];
  const plans = ["Enterprise", "Team", "Company", "Basic"];
  const imagebbKEY = process.env.REACT_APP_IMAGEBB_KEY;
  const navigate = useNavigate();
  const { user } = useContext(UserAuthContext);
  const dispatch = useDispatch()

  const handleAddProduct = (e) => {
    const imageHostKey = "f04df4e1343869002a97bc435ec536f7";



    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const username = form.username.value;
    const email = form.email.value;
    const imagee = form.image.value;
    const rolee = form.role.value;
    const planee = form.plan.value;
    const statuss = form.status.value;

    const image = form.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // formData.append('img', img)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    const user = {
      name,
      username,
      email,
      imagee,
      rolee,
      planee,
      statuss,
    };
    console.log(user);

    dispatch(addToUser(user))

  };

  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg mx-auto mt-6 bg-white max-w-md">
        <form onSubmit={handleAddProduct}>
          <label className="text-red-600 font-bold ">Name</label>
          <div className="form-group mb-2">
            <input
              name="name"
              type="text"
              className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Enter Your Name"
            />
          </div>
          <label className="text-red-600 font-bold ">User Name</label>
          <div className="form-group mb-2">
            <input
              name="username"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Enter Your User Name"
            />
          </div>
          <label className="text-red-600 font-bold ">Email</label>
          <div className="form-group mb-2">
            <input
              name="email"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Enter Your Email Here"
            />
          </div>
          <label className="text-red-600 font-bold ">Your Photo</label>
          <div className="form-group mb-2">
            <input
              name="image"
              type="file"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Enter Your Photo"
            />
          </div>
          <label className="text-red-600 font-bold ">Select an Role</label>
          <select
            name="role"
            className="select select-bordered  mb-2 form-control block w-full px-3 py-1.5 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding border border-solid
                  border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 
                  focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            {roles.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))}
          </select>
          <label className="text-red-600 font-bold ">Select an Plan</label>
          <select
            name="plan"
            className="select select-bordered  mb-2 form-control block w-full px-3 py-1.5 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding border border-solid
                  border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 
                  focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            {plans.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))}
          </select>
          <label className="text-red-600 font-bold ">Select an Status</label>
          <select
            name="status"
            className="select select-bordered  mb-2 form-control block w-full px-3 py-1.5 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding border border-solid
                  border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 
                  focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            {condition.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))}
          </select>

          <div className="form-group form-check text-center mb-6"></div>
          <button
            type="submit"
            className=" w-full inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
          >
            Add New User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
