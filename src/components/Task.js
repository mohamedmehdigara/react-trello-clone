import React from 'react';

const Task = ({ index, title, moveTask }) => {
  const handleMoveTask = () => {
    const destinationListIndex = prompt('Enter destination list index:');
    if (destinationListIndex) {
      moveTask(index, parseInt(destinationListIndex, 10));
    }
  };

  return (
    <div>
      <p>{title}</p>
      <button onClick={handleMoveTask}>Move Task</button>
    </div>
  );
};

export default Task;
