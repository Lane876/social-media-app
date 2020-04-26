import React from "react";

const Header = ({ user, setUser }) => {
  function handleLogout() {
    setUser("");
  }

  return (
    <div>
      Welcome, {user}!<button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
