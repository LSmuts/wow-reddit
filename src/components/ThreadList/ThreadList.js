// For displaying threads

import React from 'react';
import './ThreadList.css';

function ThreadList({ threads }) {
  return (
    <ul>
      {threads.map((thread) => (
        <li key={thread.id}> {/* Add a unique 'key' prop */}
          <h3>{thread.title}</h3>
          <p>{thread.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default ThreadList;