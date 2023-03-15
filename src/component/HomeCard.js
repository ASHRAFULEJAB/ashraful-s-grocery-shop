import React from 'react';
import shari from '../assets/images/shari.jpg'
import pant from '../assets/images/pant.jpg'
import shirt from '../assets/images/shirt.jpg'
import lehenga from '../assets/images/lehenga.jpg'
import { BsFileMinus, BsFilePlus } from 'react-icons/bs';

const HomeCard = () => {
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
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src={shari}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Shari
                </h5>
                <div className="flex items-center justify-between mt-5">
                  <h2 className="text-xl font-semibold tracking-wide">
                    Price: $199
                  </h2>
                  <p className="text-black">QTY: 11</p>
                </div>
                <p className="mb-5 text-gray-700">
                  White voile saree with multicolour prints and attached
                  petticoat. Comes with red printed and embroidered voile
                  stitched blouse.Comes with red printed and embroidered voile
                  stitched blouse.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-bold 
                tracking-wide text-white transition duration-200 rounded shadow-md
                 bg-sky-500 hover:bg-sky-600 
                 focus:shadow-outline focus:outline-none"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src={shirt}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Shirt
                </h5>
                <div className="flex items-center justify-between mt-5">
                  <h2 className="text-xl font-semibold tracking-wide">
                    Price: $199
                  </h2>
                  <p className="text-black">QTY: 11</p>
                </div>
                <p className="mb-5 text-gray-700">
                  Purple cotton shirt with casual collar and chest pocket.Hand
                  Wash With Mild Detergent In Cold Water.Purple cotton shirt
                  with casual collar and chest pocket.Hand Wash With Mild
                  Detergent In Cold Water
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center
                 h-12 px-6 font-bold tracking-wide text-white 
                 transition duration-200 rounded shadow-md bg-sky-500
                  hover:bg-sky-600 focus:shadow-outline focus:outline-none"
                >
                  <div className='flex items-center justify-center text-2xl' ><span  className='mr-3' ><BsFileMinus></BsFileMinus></span>
                            <span> </span>

                            <span  ><BsFilePlus className='ml-3' ></BsFilePlus></span>
                            </div>
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src={pant}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Pant
                </h5>
                <div className="flex items-center justify-between mt-5">
                  <h2 className="text-xl font-semibold tracking-wide">
                    Price: $199
                  </h2>
                  <p className="text-black">QTY: 11</p>
                </div>
                <p className="mb-5 text-gray-700">
                  Black and olive gabardine pant. Features button closure and
                  zip fly.Hand Wash With Mild Detergent In Cold Water.Black and
                  olive gabardine pant. Features button closure and zip fly.Hand
                  Wash With Mild Detergent In Cold Water.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6
                 font-bold tracking-wide text-white transition duration-200 
                 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline 
                 focus:outline-none"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src={lehenga}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Lehenga
                </h5>
                <div className="flex items-center justify-between mt-5">
                  <h2 className="text-xl font-semibold tracking-wide">
                    Price: $199
                  </h2>
                  <p className="text-black">QTY: 11</p>
                </div>
                <p className="mb-5 text-gray-700">
                  Pink denim jacket with printed cotton patch detail. Full
                  button opening.Hand Wash With Mild Detergent In Cold WaterHand
                  Wash With Mild Detergent In Cold Water.Hand Wash With Mild
                  Detergent In Cold Water
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 
                font-bold tracking-wide text-white transition duration-200 
                rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline
                 focus:outline-none"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeCard;