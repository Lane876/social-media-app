import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
