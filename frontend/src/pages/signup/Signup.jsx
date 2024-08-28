import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [formValues, setformValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async ()=>{
      console.log("formValues");
    try {
      console.log(formValues,"formValues")
      const res = await axios.post("http://localhost:8080/userAuth/v1/signup",formValues);
       console.log(res, "res");
       navigate("/login")
    } catch (error) {
      toast.error(error);

    }
  }
  return (
    <>
      {" "}
      <ToastContainer />{" "}
      <div className="h-screen bg-green-100 flex items-center justify-center">
        <div className=" w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
          <Link to={"/"} className="text-2xl font-bold ">
            Podcaster
          </Link>
          <div className="mt-6 w-full">
            <div className="w-full flex flex-col">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                className="mt-2 px-2 py-2 rounded outline-none border-2 border-black"
                required
                placeholder="Username"
                name="username"
                value={formValues?.username}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="mt-2 px-2 py-2 rounded outline-none border-2 border-black"
                required
                placeholder="Email"
                name="email"
                value={formValues?.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="mt-2 px-2 py-2 rounded outline-none border-2 border-black"
                required
                placeholder="Password"
                name="password"
                value={formValues?.password}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <button
                className="bg-green-900 font-semibold text-xl text-white rounded py-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="w-full flex flex-col mt-4">
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold hover:text-blue-600">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
