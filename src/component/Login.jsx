import React from "react";

const Login = () => {
  const [state, setState] = React.useState("login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-[90%] sm:w-[400px] text-center bg-white/6 border border-white/10 rounded-2xl px-8 py-6"
      >
        <h1 className="text-white text-3xl font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Please sign in to continue
        </p>

        {/* NAME */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-white outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* EMAIL */}
        <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent text-white outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-white outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-400 text-sm mt-4 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-indigo-400 ml-1">click here</span>
        </p>
      </form>

      {/* BACKDROP */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-800/35 rounded-full blur-3xl" />
        <div className="absolute right-12 bottom-10 w-[300px] h-[150px] bg-indigo-700/35 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default Login;