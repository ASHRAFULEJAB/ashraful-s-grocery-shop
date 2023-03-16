import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsFileMinus, BsFilePlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToBuy, addToCart } from "../redux/features/carts/cartSlice";
import {
  decrementQuantity,
  incrementQuantity,
  updateQty,
  stockIncrement,
  stockDecrement,
} from "../redux/features/products/productsSlice";

const SingleProducts = ({ product }) => {
  const dispatch = useDispatch();

  const [change, setChange] = useState(false);

  const handleAddtoBuy = () => {
    setChange(!change);
    dispatch(updateQty(product));
    dispatch(addToBuy(product));
  };
  const { buy } = useSelector((state) => state.cart);

  console.log(buy);

  const handleIncrement = () => {
    if (product.stock > 0) {
      dispatch(stockDecrement(product?.id));
      dispatch(incrementQuantity(product?.id));
    }
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      dispatch(stockIncrement(product?.id));
      dispatch(decrementQuantity(product?.id));
    }
  };

  ///price update
  const total = product.price * product.quantity;

  //add to Cart

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product has been added to cart");
  };

  return (
    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
          src={product.image}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {product.name}
        </h5>
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-xl font-semibold tracking-wide">Tk. {total}</h2>
          <p className="text-black">QTY: {product.stock}</p>
        </div>
        <p className="mb-5 text-gray-700">{product.des}</p>
        {!change && (
          <button
            onClick={handleAddtoBuy}
            className="inline-flex items-center justify-center h-12 px-6 font-bold 
            tracking-wide text-white transition duration-200 rounded shadow-md
             bg-sky-500 hover:bg-sky-600 
             focus:shadow-outline focus:outline-none"
          >
            Add To Cart
          </button>
        )}
        {change && (
          <div className="w-full py-2 bg-white text-gray-700  font-bold border rounded-lg">
            <div className="flex items-center justify-center text-2xl">
              <span onClick={handleDecrement} className="mr-3">
                <BsFileMinus></BsFileMinus>
              </span>
              <span> {product.quantity}</span>

              <span onClick={handleIncrement}>
                <BsFilePlus className="ml-3"></BsFilePlus>
              </span>

              <button
                onClick={handleAddToCart}
                className="px-6 py-1 bg-blue-600 rounded-lg text-white ml-4"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProducts;
