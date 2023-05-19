import React from "react";
const Banner = () => {
  return (
    <div
      className="bg-cover  bg-no-repeat  md:bg-center h-[120vh]"
      style={{ backgroundImage: "url('/images/bgtest.jpeg')", opacity: 0.9 }}
    >
      <div className="text-white w-4/5 mx-auto md:w-full   flex-col  h-full">
        <div className="h-[58vh]"></div>
        <div className="flex justify-center">
          <div data-aos="fade-up" className="max-w-sm  p-6 bg-slate-400  hover:bg-white rounded-3xl shadow">
            <a href="#">
              <h5 className="mb-2 opacity-100 text-3xl text-red-600 font-bold tracking-tight  ">
                Holiday 60% Off
              </h5>
            </a>
            <p className="mb-2 text-pink-600 text-xl font-semibold">
              Crazy Feel with Your
              Favourite Super Heros
            </p>
            <p className="mb-2 text-lg font-semibold text-rose-600">
              Pick Your Heros Now
            </p>
            <button
           
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Top Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
