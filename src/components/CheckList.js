import React, { useState } from 'react';

const Checklist = () => {
  const [checklistItems, setChecklistItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');

  const handleAddItem = () => {
    if (newItemText) {
      setChecklistItems([...checklistItems, newItemText]);
      setNewItemText('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...checklistItems];
    updatedItems.splice(index, 1);
    setChecklistItems(updatedItems);
  };

  return (
    <div className="checklist">
      <h3>Checklist</h3>
      <ul>
        {checklistItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="add-item">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add an item..."
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default Checklist;
