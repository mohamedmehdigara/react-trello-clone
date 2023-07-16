import React from 'react';

const ActivityFeed = () => {
  // Sample activity data
  const activities = [
    { id: 1, description: 'John Doe added a comment', timestamp: '10 minutes ago' },
    { id: 2, description: 'Jane Smith moved a card', timestamp: '1 hour ago' },
    { id: 3, description: 'Bob Johnson updated a checklist', timestamp: '2 hours ago' },
  ];

  return (
    <div className="activity-feed">
      <h3>Activity Feed</h3>
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          {/* Activity description */}
          <p className="description">{activity.description}</p>

          {/* Timestamp */}
          <p className="timestamp">{activity.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
