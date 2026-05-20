

import  { useContext, useState } from "react";
import { StoreContext } from "./storeContext";



const Login = () => {
  const [loginStatus, setLoginStatus] = useState("signup");
   const {setLogin,setLoginProfile} = useContext(StoreContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (loginStatus === "signup" && name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert(loginStatus === "signup" ? "Signup success" : "Login success");

    setFormData({ name: "", email: "", password: "" });
    setLogin(false);
    setLoginProfile(true)
  };

  return (
    <>
      <div className=" fixed  inset-0   flex justify-center items-center z-50 ">
        <form
          onSubmit={onSubmitHandler}
          className="w-[90%]  sm:w-[400px] bg-black border border-white/12 rounded-2xl px-8 py-6 flex flex-col justify-center items-center gap-5 "
        >
          <div className="w-full relative">
            {/* Top bar */}
            <div className="flex justify-between items-start w-full">
              <div>
                {loginStatus === "signup" ? (
                  <h1 className="text-2xl font-bold text-white">Sign Up</h1>
                ) : (
                  <h1 className="text-2xl font-bold text-white">Login</h1>
                )}
              </div>

              <div
                className="text-xl text-white cursor-pointer"
                onClick={() => setLogin(false)}
              >
                ✕
              </div>
            </div>

            {/* Center text */}
            <div className="flex justify-center items-center mt-6">
              <p className="text-base text-[#D1D5DB] text-center">
                Please{" "}
                <span className="font-bold">
                  {loginStatus === "signup" ? "sign up" : "log in"}
                </span>{" "}
                to continue
              </p>
            </div>
          </div>
          {loginStatus === "signup" && (
            <div className=" flex text-white focus-within:ring-indigo-500/60 items-center w-full h-12 px-4 gap-4  bg-white/5 ring-2 ring-white/10 rounded-full  ">
              <i className="fa-solid fa-user"></i>

              <input
                className="w-full bg-transparent  text-white outline-none "
                type="text"
                placeholder="Username"
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
                required
              />
            </div>
          )}

          <div className=" flex text-white focus-within:ring-indigo-500/60 items-center w-full h-12 px-4 gap-4  bg-white/5 ring-2 ring-white/10 rounded-full  ">
            <i className="fa-solid fa-envelope"></i>

            <input
              className="w-full bg-transparent  text-white outline-none "
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className=" flex text-white focus-within:ring-indigo-500/60 items-center w-full h-12 px-4 gap-4  bg-white/5 ring-2 ring-white/10 rounded-full  ">
            <i className="fa-solid fa-lock"></i>

            <input
              className="w-full bg-transparent  text-white outline-none "
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              required
            />
          </div>

          <button
            type="submit"
            className="  cursor-pointer py-3 mt-2  w-[70%]  bg-[#4F39F6] rounded-full text-white "
          >
            <p className=" text-lg">
              {loginStatus === "signup" ? "sign up" : "Login"}
            </p>
          </button>

          <div>
            <p className="text-[#D1D5DB] ">
              {loginStatus === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <span
                className="text-indigo-400 ml-1 cursor-pointer"
                onClick={() =>
                  setLoginStatus((prev) =>
                    prev === "signup" ? "login" : "signup",
                  )
                }
              >
                {loginStatus === "signup" ? "Login" : "sign up"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
