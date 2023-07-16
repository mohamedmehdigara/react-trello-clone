import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Trello logo */}
      <img src="trello-logo.png" alt="Trello Logo" className="logo" />

      {/* Board title */}
      <h1 className="board-title">Board Title</h1>

      {/* User profile/avatar */}
      <div className="user-profile">
        <img src="user-avatar.png" alt="User Avatar" className="avatar" />
        <span className="username">John Doe</span>
      </div>
    </div>
  );
};

export default Navbar;
