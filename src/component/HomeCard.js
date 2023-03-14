import React from 'react';

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
                  src="https://viso.ai/wp-content/uploads/2021/06/image-annotation-computer-vision-header3.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Shari
                </h5>
                <p className="mb-5 text-gray-700">
                  We create high quality, human-annotated data for your machine
                  learning project. Our image annotation and labeling services
                  help shape custom datasets that fit your specific needs.
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
                  src="https://blog.cloudfactory.com/hubfs/Image%20Resizing%20for%20Blog%20and%20Social%20%288%29-Nov-23-2020-08-26-09-98-PM.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Shirt
                </h5>
                <p className="mb-5 text-gray-700">
                  We work with a diverse range of media to create precise,
                  human-annotated training datasets. Our expertise with video
                  annotation and labeling allow us to craft custom machine
                  learning datasets that meet the demands of your project.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center
                 h-12 px-6 font-bold tracking-wide text-white 
                 transition duration-200 rounded shadow-md bg-sky-500
                  hover:bg-sky-600 focus:shadow-outline focus:outline-none"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src="https://us.123rf.com/450wm/alexan107/alexan1072207/alexan107220700048/188735061-businessman-working-on-computer-laptop-and-touching-to-virtual-screen-to-check-and-approve-document-.jpg?ver=6?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Pant
                </h5>
                <p className="mb-5 text-gray-700">
                  At Marker Key.Io we are conscientious about collecting data
                  from reputable and legal sources. We exclusively use open
                  source data to ensure the highest quality and transparency for
                  our clients.
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
                  src="https://t4.ftcdn.net/jpg/01/88/15/87/360_F_188158741_2cMmFn6behaKBUqrHYTslbk5D2ghEzB7.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Lehenga
                </h5>
                <p className="mb-5 text-gray-700">
                  We assign objects to different classes in images or videos,
                  and help to train machine learning models to recognize objects
                  in any context.transformative technology by creating image and
                  video data based on your specifications.
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