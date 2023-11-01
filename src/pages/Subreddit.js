// Subreddit-specific threads

import React from 'react';
import Header from '../components/Header/Header';
import ThreadList from '../components/ThreadList/ThreadList';

function Subreddit({ subredditName, subredditThreads }) {
  return (
    <div>
      <Header />
      <h1>{subredditName}</h1>
      <ThreadList threads={subredditThreads} />
    </div>
  );
}

export default Subreddit;