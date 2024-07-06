import React from "react";

export default function SignUp() {
  return (
    <div>
      <form action="" method="post">
        <label>
          {" "}
          Your Name:
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email:
          <input type="text" name="signUpEmail" id="SignUpEmail" />
        </label>
        <label>
          Password:
          <input type="password" name="signUpPassword" id="signUpPasswords" />
        </label>
      </form>
    </div>
  );
}
