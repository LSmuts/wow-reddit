// Main application component

import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar/SearchBar';
import ThreadList from './components/ThreadList/ThreadList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './pages/Home';
import Subreddit from './pages/Subreddit';


function App() {
  const initialSubreddit = 'wow'; // Change this to the default subreddit
  const [subreddit, setSubreddit] = useState(initialSubreddit); // eslint-disable-line no-unused-vars
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // eslint-disable-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then((data) => {
        setPosts(data.data.children);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [subreddit]);

  return (
    <Router>
      <div className="App">
        <Header /> {/* Should be included once here */}
        <SearchBar />
        {loading ? (
          <div className="loading-indicator">Loading...</div>
        ) : (
          <ThreadList threads={posts} />
        )}
        <Sidebar featuredSubreddits={['wow', 'warcraftlore', 'classicwow', 'wowhardcore', 'World_of_Warcraft']} />
        <Routes>
          <Route path="/" element={<Home trendingThreads={posts} />} />
          <Route path="/subreddit/:subredditName" element={<Subreddit subredditName={subreddit} subredditThreads={posts} />} />
          <Route path="/error" element={<ErrorPage error={error} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;