import React, { useState } from 'react';

const Comment = () => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (commentText) {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        author: 'John Doe',
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <p>Author: {comment.author}</p>
          </div>
        ))}
      </div>
      <div className="add-comment">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default Comment;
