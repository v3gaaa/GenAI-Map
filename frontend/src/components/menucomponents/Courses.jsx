import PlanetContainer from "../planetcomponents/PlanetContainer";
import React, { useState } from "react";
import bcrypt from 'bcryptjs';

const Courses = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: ""
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
    
      const handleSignUp = async (e) => {
        e.preventDefault();
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(form.password, salt);

          const formWithHashedPassword = {
              ...form,
              password: hashedPassword,
          };

          const res = await fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formWithHashedPassword),
          });
          return res.status === 201
            ? alert('Registro exitoso')
            : alert('Error al registrar');
        } catch (error) {
          alert('Error al registrar');
          throw new Error('Error al registrar');
        }
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
            <input id="firstname" name="firstname" type="firstname" autoComplete="firstname" placeholder="Name"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-[white] rounded-lg font-medium placeholder:font-normal"
                onChange={handleOnChange}
                value={form.firstname}
            />
            <input id="lastname" name="lastname" type="lastname" autoComplete="lastname" placeholder="Last name"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-[white] rounded-lg font-medium placeholder:font-normal"
                onChange={handleOnChange}
                value={form.lastname}
            />
            <input id="username" name="username" type="username" autoComplete="username" placeholder="Username"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-[white] rounded-lg font-medium placeholder:font-normal"
                onChange={handleOnChange}
                value={form.username}
            />
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
            onClick={handleSignUp}
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
