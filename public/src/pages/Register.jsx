import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      console.log(data);
      if (data) {
        if (data.errors) {
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <h2>Register Account</h2>
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
        <button type="submit">Submit</button>
        <span>
          Already have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

// NOTES:

// What does withCredentials do in Axios?
// withCredentials property is a boolean value that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-origin requests.
