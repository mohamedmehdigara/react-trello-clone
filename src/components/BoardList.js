import React from 'react';

const BoardList = () => {
  // Sample board data
  const boards = [
    { id: 1, title: 'Board 1', thumbnail: 'thumbnail1.png' },
    { id: 2, title: 'Board 2', thumbnail: 'thumbnail2.png' },
    { id: 3, title: 'Board 3', thumbnail: 'thumbnail3.png' },
  ];

  return (
    <div className="board-list">
      {boards.map((board) => (
        <div key={board.id} className="board-item">
          {/* Board thumbnail */}
          <img src={board.thumbnail} alt={board.title} className="thumbnail" />

          {/* Board title */}
          <h3 className="title">{board.title}</h3>

          {/* Edit and delete options */}
          <div className="options">
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardList;
