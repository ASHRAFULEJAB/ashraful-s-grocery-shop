
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../contexts/AuthContext/AuthProvider";
import { addToProduct } from "../redux/features/products/productsSlice";

const AddProduct = () => {
  const condition = ["excellent", "good", "fair"];
  const imagebbKEY = process.env.REACT_APP_IMAGEBB_KEY;
  const navigate = useNavigate();
  const { user } = useContext(UserAuthContext);


  const imageHostKey = "f04df4e1343869002a97bc435ec536f7";
  //   const url = `https://mall-of-recondition-laptops-server.vercel.app/users/email?email=${user?.email}`;
  //   const { data: users = [], refetch } = useQuery({
  //     queryKey: ["users", user?.email],
  //     queryFn: async () => {
  //       const res = await fetch(url, {});
  //       const data = await res.json();
  //       return data;
  //     },
  //   });
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const handleAddProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // formData.append('img', img)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
        }

        const product = {
          ...data,
          image: imgData.data.url,

        }

        console.log(product);

        dispatch(addToProduct(product))

      });
  };

  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg mx-auto mt-6 bg-white max-w-md">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <label className="text-red-600 font-bold ">Product Name</label>
          <div className="form-group mb-2">
            <input
              {...register("name")}
              name="name"
              type="text"
              className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Enter Your Product Name"
            />
          </div>
          <label className="text-red-600 font-bold ">Product Price</label>
          <div className="form-group mb-2">
            <input
              {...register("price", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="price"
              type="number"
              min="0"
              step="0.01"
              name="price"
              required
            />
          </div>
          {/* <div className="form-group mb-6">
            <input
              name="resale_price"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Resale price"
            />
          </div> */}
          {/* <select
            name="condition"
            className="select select-bordered w-full mb-2"
          >
            {condition.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))}
          </select> */}
          <label className="text-red-600 font-bold ">Photo</label>
          <div className="form-group mb-2">
            <input
              {...register("image")}
              name="image"
              type="file"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Enter Your Photo"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">
                Quantity
              </label>
              <input
                {...register("stock", { required: true })}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="image"
                type="number"
                name='stock'
                required
              />
            </div>
          </div>
          {/* <div className="form-group mb-6">
            <input
              name="phone"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="location"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Location"
            />
          </div>
          <label className="text-red-600 font-bold ">
            You Must Add Category Id Between 01,02,03,04,05,06
          </label>
          <div className="form-group mb-6">
            <input
              name="category_id"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="category_id must be in 0(number) format like 02"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="years_of_use"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Year of purchase"
            />
          </div> */}
          <label className="text-red-600 font-bold ">Description</label>
          <div className="form-group mb-4">
            <textarea
              {...register("des")}
              name="des"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6"></div>
          <button
            type="submit"
            className=" w-full inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
          >
            Add A Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
