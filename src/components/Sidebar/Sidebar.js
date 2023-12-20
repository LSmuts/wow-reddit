import React from 'react';
import './Sidebar.css';

// Import icons for featured subreddits
import wowIcon from '../../images/wow-icon.png';
import warcraftloreIcon from '../../images/wow-lore-icon.png';
import classicwowIcon from '../../images/classicwow-icon.png';
import wowhardcoreIcon from '../../images/wow-hardcore-icon.png';
import worldOfWarcraftIcon from '../../images/world-of-warcraft-icon.png';

// Data for featured subreddits with their names, icons, and subscriber counts
const featuredSubredditsData = [
  { name: 'wow', icon: wowIcon, subscribers: 1000000 },
  { name: 'warcraftlore', icon: warcraftloreIcon, subscribers: 50000 },
  { name: 'classicwow', icon: classicwowIcon, subscribers: 750000 },
  { name: 'wowhardcore', icon: wowhardcoreIcon, subscribers: 10000 },
  { name: 'World_of_Warcraft', icon: worldOfWarcraftIcon, subscribers: 2000000 },
];

// Sidebar component displaying featured subreddits
function Sidebar() {
  return (
    // Container for the sidebar with a specific class for styling
    <aside className="subreddit-container">
      {/* Content of the sidebar */}
      <div className="subreddit-content">
        {/* Sidebar title */}
        <h2 className="sidebar-title">Featured Subreddits</h2>
        {/* Horizontal line for separation */}
        <hr />
        {/* List of featured subreddits */}
        <ul>
          {featuredSubredditsData.map((subreddit) => (
            // Each list item corresponds to a featured subreddit
            <li key={subreddit.name}>
              {/* Container for a single subreddit item */}
              <div className="subreddit-item">
                {/* Icon of the subreddit */}
                <img className="sub-icon" src={subreddit.icon} alt={`${subreddit.name} icon`} />
                {/* Details of the subreddit, including title and subscriber count */}
                <div className="subreddit-details">
                  <h2 className="subreddit-title">{subreddit.name}</h2>
                  <p className="subreddit-subs">{subreddit.subscribers} Subscribers</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;