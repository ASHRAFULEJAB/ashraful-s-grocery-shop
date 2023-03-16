import React from "react";
import shari from "../assets/images/shari.jpg";
import pant from "../assets/images/pant.jpg";
import shirt from "../assets/images/shirt.jpg";
import lehenga from "../assets/images/lehenga.jpg";
import { BsFileMinus, BsFilePlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import SingleProducts from "./SingleProducts";

const HomeCard = () => {
  const { products } = useSelector((state) => state.products);

  let dataFetch;

  if (products.length > 0) {
    dataFetch = products.map((product) => (
      <SingleProducts product={product} key={product.id}></SingleProducts>
    ));
  }

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1
          class="text-2xl font-semibold text-gray-700 
          capitalize lg:text-3xl dark:text-gray-800 mb-3"
        >
          OUR
          <br /> All <span class="text-blue-500"> Products</span>
        </h1>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          {dataFetch}

        </div>
      </div>
    </div>
  );
};

export default HomeCard;
