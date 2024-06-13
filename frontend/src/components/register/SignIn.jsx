import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [sign, setSign] = useState(false);
  const [storedPassword, setStoredPassword] = useState("");

  const handleOnChange = (e) => {
    const newValues = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newValues);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      let user;
      try {
        const res = await fetch(
          "http://localhost:8000/api/users/username/" + form.username
        );
        user = await res.json();
      } catch (error) {
        try {
          const res = await fetch(
            "http://localhost:8000/api/users/email/" + form.username
          );
          user = await res.json();
        } catch (error) {
          setSign(false);
          alert("Usuario no encontrado");
          return;
        }
      }

      const passwordMatch = await bcrypt.compare(form.password, user.password);
      if (passwordMatch) {
        console.log("Inicio de sesión exitoso");
        navigate("/home");
      } else {
        console.log("Contraseña incorrecta");
        alert("Contraseña incorrecta");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="main-container">
      <div className="flex min-h-screen w-full">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Try AI Universe!
                </h2>
                <p className="text-md md:text-xl text-white">
                  Sign in to your account
                </p>
              </div>
              <div className="flex flex-col max-w-md space-y-5">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Username or Email"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-[white] rounded-lg font-medium placeholder:font-normal bg-[#0C0618] text-white"
                  onChange={handleOnChange}
                  value={form.username}
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  placeholder="Password"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-green rounded-lg font-medium placeholder:font-normal bg-[#0C0618] text-white"
                  onChange={handleOnChange}
                  value={form.password}
                />
                <button
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-white bg-white text-black hover:border-green-500"
                  type="button"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
