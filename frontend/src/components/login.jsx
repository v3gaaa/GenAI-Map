import PlanetContainer from "../planetcomponents/PlanetContainer";
import React, { useState } from "react";

const Courses = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
      });
    
      const handleOnChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const newValues = {
          ...form,
          [e.target.name]: e.target.value,
        };
        console.log(newValues);
        setForm(newValues);
      };
    
      const handleLogin = async () => {
        const code = await getDataAuth();
        console.log(code);
        authFLow(code);
      };

    return (
        <>
<div className="main-container">

  <div className="flex min-h-screen w-full">


    <div className="flex flex-row w-full">


      


      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-white rounded-full w-6 h-6"></span>
            <a href="#" className="font-medium text-lg">Brand</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Not a member? </span>
            <a href="#" className="underline font-medium text-[#070eff]">
              Sign up now
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Welcome back!</h2>
            <p className="text-md md:text-xl text-white">Log in into your account</p>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            <input id="email" name="email" type="email" autoComplete="email" placeholder="Email or username"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-[white] rounded-lg font-medium placeholder:font-normal"
              onChange={handleOnChange}
              value={form.email}
            />
            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-green rounded-lg font-medium placeholder:font-normal"
              onChange={handleOnChange}
              value={form.password}  
            />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-white bg-black text-white"
            type="button"
            onClick={handleLogin}
            >Sign in</button>
          </div>
        </div>

        

      </div>
    </div>

  </div>
</div>
</>
    )
}

export default Courses;
