import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h2>Login Account</h2>
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            // value={values}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            // value={values}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Login</button>
        <span>
          Don't have an account ? <Link to="/register">Register</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}
