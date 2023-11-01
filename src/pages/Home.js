// Home page with trending threads

import React from 'react';
import Header from '../components/Header/Header';
import ThreadList from '../components/ThreadList/ThreadList';

function Home({ trendingThreads }) {
  return (
    <div>
      <Header />
      <ThreadList threads={trendingThreads} />
    </div>
  );
}

export default Home;