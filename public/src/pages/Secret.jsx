import React from "react";
import { useNavigate } from "react-router-dom";

export default function Secret() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/register");
  };
  return (
    <div className="private">
      <h1>Super Secret page</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}
