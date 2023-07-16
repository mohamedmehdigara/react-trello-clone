import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="trello-logo.png" alt="Trello Logo" className="logo" />
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Solutions</a>
          </li>
          <li>
            <a href="/">Plans</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/" className="login-button">
          Log in
        </a>
        <a href="/" className="signup-button">
          Sign Up - It's Free!
        </a>
      </div>
    </div>
  );
};

export default Navbar;

