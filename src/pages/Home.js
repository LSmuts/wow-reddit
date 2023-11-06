// Home page with trending threads

import React from 'react';
import ThreadList from '../components/ThreadList/ThreadList';

function Home({ trendingThreads }) {
  return (
    <div>
      <ThreadList threads={trendingThreads} />
    </div>
  );
}

export default Home;