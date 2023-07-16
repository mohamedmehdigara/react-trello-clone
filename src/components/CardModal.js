import React from 'react';

const CardModal = () => {
  // Card data
  const card = {
    id: 1,
    title: 'Card Title',
    description: 'Card Description',
    dueDate: '2022-12-31',
    attachments: ['attachment1.png', 'attachment2.png'],
    comments: [
      { id: 1, text: 'Comment 1', author: 'John Doe' },
      { id: 2, text: 'Comment 2', author: 'Jane Smith' },
    ],
    checklists: [
      { id: 1, title: 'Checklist 1', items: ['Item 1', 'Item 2'] },
      { id: 2, title: 'Checklist 2', items: ['Item 3', 'Item 4'] },
    ],
  };

  return (
    <div className="card-modal">
      {/* Card title */}
      <h2 className="title">{card.title}</h2>

      {/* Card description */}
      <p className="description">{card.description}</p>

      {/* Due date */}
      <p className="due-date">Due Date: {card.dueDate}</p>

      {/* Attachments */}
      <div className="attachments">
        <h3>Attachments</h3>
        {card.attachments.map((attachment) => (
          <img key={attachment} src={attachment} alt="Attachment" />
        ))}
      </div>

      {/* Comments */}
      <div className="comments">
        <h3>Comments</h3>
        {card.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <p>Author: {comment.author}</p>
          </div>
        ))}
      </div>

      {/* Checklists */}
      <div className="checklists">
        <h3>Checklists</h3>
        {card.checklists.map((checklist) => (
          <div key={checklist.id} className="checklist">
            <h4>{checklist.title}</h4>
            <ul>
              {checklist.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardModal;
