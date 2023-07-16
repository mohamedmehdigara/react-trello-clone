import React from 'react';

const MemberList = () => {
  // Sample member data
  const members = [
    { id: 1, name: 'John Doe', avatar: 'avatar1.png', role: 'Admin' },
    { id: 2, name: 'Jane Smith', avatar: 'avatar2.png', role: 'Member' },
    { id: 3, name: 'Bob Johnson', avatar: 'avatar3.png', role: 'Member' },
  ];

  return (
    <div className="member-list">
      <h3>Members</h3>
      {members.map((member) => (
        <div key={member.id} className="member-item">
          {/* Member avatar */}
          <img src={member.avatar} alt={member.name} className="avatar" />

          {/* Member name and role */}
          <div className="info">
            <p className="name">{member.name}</p>
            <p className="role">{member.role}</p>
          </div>
        </div>
      ))}

      {/* Add member and manage roles options */}
      <div className="options">
        <button className="add-member-button">Add Member</button>
        <button className="manage-roles-button">Manage Roles</button>
      </div>
    </div>
  );
};

export default MemberList;
