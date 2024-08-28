import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  const cat = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  return (
    <>
      <div className="h-screen lg:h[70vh]">
        <div className="px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cat.map((ele, index) => (
            <Link
              to="/"
              key={index}
              className={`rounded px-8 py-4 text-xl font-semibold hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden -z-10`}
            >
              <div>{ele}</div>
              <div className="w-[100%] flex items-center justify-end absolute -bottom-2 -right-2">
                <img
                  src={
                    "https://img.freepik.com/free-vector/music-hand-drawn-flat-podcast-cover_23-2149444190.jpg?size=626&ext=jpg"
                  }
                  alt="ele"
                  className="rounded rotate-6 h-[15vh] md:h-[17vh] lg:h-[15vh]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
