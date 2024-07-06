import React, { useState } from "react";

export default function LogInForm() {
  const [name, setName] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    axios.post("", {});
  };
  return (
    <div>
      <h3>Have an account with us?</h3>
      <form onSubmit={formHandler}>
        <label>
          Email:
          <input
            type="text"
            name="logInEmail"
            id="logInEmail"
            placeholder="Email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            id="logInPassword"
            placeholder="Password"
          />
        </label>
        <label>
          <input type="text" name="role" id="role" />
        </label>
        <button type="submit">Log In</button>
      </form>
      <div>
        <p>or</p>
        <Link>Sign Up</Link>
      </div>
    </div>
  );
}
