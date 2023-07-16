import React, { useState } from 'react';

const Attachment = () => {
  const [attachments, setAttachments] = useState([]);
  const [newAttachment, setNewAttachment] = useState('');

  const handleAddAttachment = () => {
    if (newAttachment) {
      setAttachments([...attachments, newAttachment]);
      setNewAttachment('');
    }
  };

  return (
    <div className="attachment-section">
      <h3>Attachments</h3>
      <div className="attachments">
        {attachments.map((attachment) => (
          <div key={attachment} className="attachment">
            <img src={attachment} alt="Attachment" />
          </div>
        ))}
      </div>
      <div className="add-attachment">
        <input
          type="text"
          value={newAttachment}
          onChange={(e) => setNewAttachment(e.target.value)}
          placeholder="Enter attachment URL"
        />
        <button onClick={handleAddAttachment}>Add Attachment</button>
      </div>
    </div>
  );
};

export default Attachment;
