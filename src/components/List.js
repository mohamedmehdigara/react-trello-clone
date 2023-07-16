import React from 'react';
import Task from './Task';

const List = ({ title, tasks, addTask, moveTask }) => {
  const handleAddTask = () => {
    const taskTitle = prompt('Enter task title:');
    if (taskTitle) {
      addTask(taskTitle);
    }
  };

  const handleMoveTask = (taskIndex, destinationListIndex) => {
    moveTask(taskIndex, destinationListIndex);
  };

  return (
    <div>
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          title={task}
          moveTask={handleMoveTask}
        />
      ))}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default List;
