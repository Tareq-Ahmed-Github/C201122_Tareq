import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#5865F2] bg-gradient py-4">
      <NavLink style={{ textDecoration: "none" }}>
        <Link className="mx-2 text-white text-decoration-none" to="/">
          Home
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/login">
          Login
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/signup">
          Signup
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/dashboard">
          Dashboard
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/addnew">
          Add New
        </Link>
      </NavLink>
    </div>
  );
};

export default Navbar;
