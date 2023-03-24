import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css';
function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [gmail, setGmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      password,
      cpassword,
      gmail,
    };

    // Pass the form data to the API using a reference
    const apiUrl = "http://127.0.0.1:8000/api/insert";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="border d-flex flex-column gap-3 w-25 px-3 py-5 bg-light bg-gradient rounded-5"
      >
        <h2 className="text-center fw-bold">Signup</h2>
        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Email"
          type="email"
          id="gmail"
          name="gmail"
          value={gmail}
          onChange={(event) => setGmail(event.target.value)}
        />

        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Confirm Password"
          type="password"
          id="cpassword"
          name="cpassword"
          value={cpassword}
          onChange={(event) => setCPassword(event.target.value)}
        />
        <small>Already have an account?<Link to="/login">Login</Link></small>
        <button
          type="submit"
          className="py-2 rounded bg-dark bg-gradient text-white submit-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;