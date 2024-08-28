import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerData } from "../../utils/initialValues";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Home from "../../pages/Home/Home";
const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleSideBar = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <>
      <nav className="px-4 md:px-8 xl:px-12 py-2 relative">
        <div className="flex items-center justify-between">
          <div className="logo brand-name w-2/6 flex items-center gap-4">
            <img
              src="https://img.icons8.com/?size=100&id=12653&format=png&color=000000"
              className="h-14"
            />
            <Link to="/" className="text-2xl">
              SoundStitch
            </Link>
          </div>
          <div className="hidden w-2/6 lg:flex items-center justify-center">
            {headerData?.map((ele, index) => (
              <Link
                key={ele?.id}
                to={ele?.path}
                className="ms-4 hover:semi-bold transition-all duration-300"
              >
                {ele?.name}
              </Link>
            ))}
          </div>
          <div className="hidden w-2/6 lg:flex items-center justify-end">
            <Link
              to={"/login"}
              className="px-6 py-3 border border-black rounded-full"
            >
              Login In{" "}
            </Link>
            <Link
              to={"/signup"}
              className="ms-4 px-6 py-3 bg-black text-white rounded-full"
            >
              Sign Up
            </Link>
          </div>
          <div className=" w-4/6 flex items-center justify-end lg:hidden z-50">
            <button className="text-4xl">
              <GiHamburgerMenu onClick={handleSideBar} />
            </button>
          </div>
        </div>

        {/* mobile-nav */}
        {mobileNav ? (
          <div className="fixed top-0 left-0 w-full h-screen bg-blue-100">
            <div className="p-8 flex item-center justify-end text-4xl">
              <button>
                <RxCross2 onClick={handleSideBar} />
              </button>
            </div>
            <div className="h-full flex flex-col items-center justify-center">
              {headerData?.map((ele, index) => (
                <Link
                  key={ele?.id}
                  to={ele?.path}
                  className="mb-12 text-3xl hover:semi-bold transition-all duration-300"
                >
                  {ele?.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="mb-12 text-3xl hover:semi-bold transition-all duration-300"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="mb-12 text-3xl hover:semi-bold transition-all duration-300"
              >
                Sign up
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
