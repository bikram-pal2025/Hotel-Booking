import React, { useState } from "react";

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
 
    const {name,value} = e.target

    setFormData((prev)=>(
     {
       ...prev,
      [name]:value
     }
    ))

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
};

  return (
    <>
      <div className=" fixed  inset-0   flex justify-center items-center z-50 ">
        <form  onSubmit={onSubmitHandler} className="w-[90%] sm:w-[400px] bg-white/6 border border-white/12 rounded-2xl px-8 py-6 flex flex-col justify-center items-center gap-5 ">
          <div className="text-center ">
            {loginStatus === "signup" ? (
              <>
                <h1 className="text-2xl font-bold text-white  ">Sign Up</h1>
                <p className="  text-base text-[#D1D5DB] ">
                  Please <span className="   font-bold">sign</span> in to
                  continue
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-white  ">Login</h1>
                <p className="  text-base text-[#D1D5DB] ">
                  Please <span className="   font-bold">Login</span> in to
                  continue
                </p>
              </>
            )}
          </div>

          {loginStatus === "signup" && (
            <div className=" flex text-white focus-within:ring-indigo-500/60 items-center w-full h-12 px-4 gap-4  bg-white/5 ring-2 ring-white/10 rounded-full  ">
              <i class="fa-solid fa-user"></i>

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
            <i class="fa-solid fa-envelope"></i>

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
            <i class="fa-solid fa-lock"></i>

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

           <button type="submit" className="  cursor-pointer py-3 mt-2  w-[70%]  bg-[#4F39F6] rounded-full text-white ">

            <p className=" text-lg">{loginStatus==='signup'?'sign up':'Login'}</p>
              
           </button>



           <div>
            <p className="text-[#D1D5DB] ">
              {loginStatus === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}
          <span className="text-indigo-400 ml-1 cursor-pointer" onClick={()=>setLoginStatus((prev)=> prev === 'signup'?'login':'signup')} >
               {loginStatus === "signup"
            ? "Login"
            : "sign up"}
          </span>
            </p>
           </div>


        </form>
      </div>
    </>
  );
};

export default Login;
