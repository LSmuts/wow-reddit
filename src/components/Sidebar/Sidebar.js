// For the sidebar with featured subreddits

import React from 'react';
import './Sidebar.css';

function Sidebar({ featuredSubreddits }) {
  return (
    <aside>
      <h2>Featured Subreddits</h2>
      <ul>
        {featuredSubreddits.map((subreddit) => (
          <li key={subreddit}>
            <button>{subreddit}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;