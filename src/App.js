import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar/SearchBar';
import ThreadList from './components/ThreadList/ThreadList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import { getRecentPostsFromSubreddits } from '../src/api/reddit';
import './App.css';

function App() {
  // Initial subreddits to display
  const initialSubreddits = useMemo(() => ['wow', 'warcraftlore', 'classicwow', 'wowhardcore', 'World_of_Warcraft'], []);

  // State variables
  const [currentSubreddit, setCurrentSubreddit] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('newest'); // Sorting criteria ('newest', 'top', 'hot', etc.)
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // useEffect hook to fetch recent posts when the component mounts or when there are changes in subreddit, initialSubreddits, sortBy, or searchQuery
  useEffect(() => {
    setLoading(true);

    // Function to fetch recent posts
    const fetchRecentPosts = async () => {
      try {
        let recentPosts;

        // Check if a specific subreddit is selected
        if (currentSubreddit) {
          recentPosts = await getRecentPostsFromSubreddits([currentSubreddit], sortBy);
        } else {
          // If no specific subreddit, fetch recent posts from initial subreddits
          recentPosts = await getRecentPostsFromSubreddits(initialSubreddits, 5, sortBy);
        }

        // Filter posts based on the searchQuery
        const filteredPosts = recentPosts.filter(post =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Set fetched and filtered posts to state, update loading state
        setPosts(filteredPosts);
        setLoading(false);
      } catch (error) {
        // Handle errors by updating error state and updating loading state
        setError(error.message || 'An error occurred.');
        setLoading(false);
      }
    };

    // Invoke the fetchRecentPosts function
    fetchRecentPosts();
  }, [currentSubreddit, initialSubreddits, sortBy, searchQuery]);

  // Event handler for subreddit click
  const handleSubredditClick = (subreddit) => {
    setCurrentSubreddit(subreddit);
  };

  // Event handler for sorting change
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  // Event handler for search query change
  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  // JSX structure for the App component
  return (
    <div className="app-container">
      {/* Header component with sorting options */}
      <Header
        onSortChange={handleSortChange}
        onSearch={handleSearchChange} // Pass the event handler for search changes
        currentSort={sortBy}
      />

      {/* Main content area */}
      <main>
        {/* Search bar component */}
        <SearchBar onSearch={handleSearchChange} /> {/* Pass the event handler for search changes */}
        {/* Display loading indicator if data is still being fetched */}
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {/* Display error page if an error occurred during data fetching */}
            {error ? (
              <ErrorPage message={error} />
            ) : (
              // Display list of threads if data is successfully fetched and no errors
              <ThreadList
                className="main"
                threads={posts}
                searchQuery={searchQuery} // Pass the search query to the ThreadList
              />
            )}
          </>
        )}
      </main>

      {/* Sidebar component for subreddit navigation */}
      <aside>
        <Sidebar
          subreddits={initialSubreddits}
          onSubredditClick={handleSubredditClick}
        />
      </aside>
    </div>
  );
}

export default App;