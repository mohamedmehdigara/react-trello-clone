import React, { useState } from 'react';
import List from './List';

const Board = () => {
  const [lists, setLists] = useState([]);

  const addList = (title) => {
    setLists([...lists, { title, tasks: [] }]);
  };

  const addTask = (listIndex, taskTitle) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].tasks.push(taskTitle);
    setLists(updatedLists);
  };

  const moveTask = (sourceListIndex, destinationListIndex, taskIndex) => {
    const updatedLists = [...lists];
    const task = updatedLists[sourceListIndex].tasks.splice(taskIndex, 1);
    updatedLists[destinationListIndex].tasks.push(task);
    setLists(updatedLists);
  };

  return (
    <div>
      <h1>Trello Board</h1>
      {lists.map((list, index) => (
        <List
          key={index}
          title={list.title}
          tasks={list.tasks}
          addTask={(taskTitle) => addTask(index, taskTitle)}
          moveTask={(taskIndex, destinationListIndex) =>
            moveTask(index, destinationListIndex, taskIndex)
          }
        />
      ))}
      <button onClick={() => addList('New List')}>Add List</button>
    </div>
  );
};

export default Board;
