import React from "react";

const Home = () => {
  return (
    <div className="bg-green-100 px-12 h-screen lg:h-[80vh] flex flex-col items-center justify-center">
      <div className=" w-full flex items-center justify-between gap-4">
        <div className="w-full lg:w-5/6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center lg:text-start">
            Create and listen the <br />
            <h1 className="flex items-end justify-center lg:justify-start mt-2 lg:mt-0 ">
              P
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=CZOBHkUQ1cyv&format=png&color=000000"
                  className="h-10 md:h-12 lg:h-16 mx-2"
                />
              </span>
              dcast
            </h1>
          </h1>
        </div>
        <div className="hidden lg:block w-1/6">
          <div className="py-4 border border-black bg-white text-xl font-semibold rounded-full text-center -rotate-90">
            Scroll Down
          </div>
        </div>
      </div>
      <div className="mt-12 w-full flex-col lg:flex-row flex items-end justify-between">
        <div className="flex flex-col items-center lg:items-start justify-center">
          <p className="text-xl font-semibold text-center lg:text-start">
            {" "}
            Listen To the Most Populat Podcast On One Platform <b>SOUNDSTICH</b>
          </p>
          <button className="px-6 py-4 mt-8 bg-green-900 text-white font-semibold rounded-full mt-6 lg:mt-8">
            Login in To Listen
          </button>
        </div>
        <div className="mt-6 lg:mt-0">
          <p className="text-zinc-700 font-bold text-center lg:text-end">
            Our App Contains more than 2000 podcast for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
