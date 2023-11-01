// For displaying threads

import React from 'react';
import './ThreadList.css';

function ThreadList({ threads }) {
  return (
    <main>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <a href={thread.url}>{thread.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ThreadList;