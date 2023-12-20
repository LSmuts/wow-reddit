import React, { useEffect, useState } from 'react';
import { getRecentPostsFromSubreddits } from '../../api/reddit';
import './ThreadList.css';

// Functional component for displaying a list of random posts from specified subreddits
function ThreadList({ searchQuery }) {
  // State to store random posts
  const [randomPosts, setRandomPosts] = useState([]);

  // useEffect to fetch initial random posts when the component mounts
  useEffect(() => {
    // Initial subreddits to fetch posts from
    const initialSubreddits = ['wow', 'warcraftlore', 'classicwow', 'wowhardcore', 'World_of_Warcraft'];

    console.log('Fetching random posts for initial subreddits...');

    // Fetch a reasonable number of posts initially (adjust as needed)
    getRecentPostsFromSubreddits(initialSubreddits)
      .then((fetchedPosts) => {
        const selectedRandomPosts = [];
        const postsBySubreddit = {};

        // Group fetched posts by subreddit
        initialSubreddits.forEach((subreddit) => {
          postsBySubreddit[subreddit] = fetchedPosts.filter((post) => post.subreddit === subreddit);
        });

        // Fetch 10 threads from each subreddit in turn
        for (let i = 0; i < 10; i++) {
          initialSubreddits.forEach((subreddit) => {
            const postsForSubreddit = postsBySubreddit[subreddit];

            if (postsForSubreddit.length > 0) {
              // Shuffle the posts and select the first post
              const shuffledPosts = postsForSubreddit.sort(() => Math.random() - 0.5);
              const randomPost = shuffledPosts[0];

              selectedRandomPosts.push({ ...randomPost });

              // Remove the selected post from the array
              postsBySubreddit[subreddit] = postsForSubreddit.filter((post) => post.id !== randomPost.id);
            }
          });
        }

        // Set the selected random posts to state
        setRandomPosts(selectedRandomPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  // useEffect to implement infinite scrolling and fetch more posts when the user scrolls to the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // User has scrolled to the bottom, fetch more posts
        fetchMorePosts();
      }
    };

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [randomPosts]); // Dependency on randomPosts to trigger the effect when new posts are added

  // Function to fetch more posts (not implemented, needs your logic)
  const fetchMorePosts = () => {
    // Implement logic to fetch more posts as needed
    // For example, you can fetch the next page of posts or additional posts dynamically
    // You may want to update the state accordingly
  };

  // Filter posts based on the searchQuery
  const filteredPosts = randomPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // JSX structure for the ThreadList component
  return (
    <div>
      <ul className='threads'>
        {/* Map through the filteredPosts and display each post */}
        {filteredPosts.map((post) => (
          <li className="post-container" key={post.id}>
            {/* Container for author information */}
            <div className="author-info">
              {/* Display subreddit icon if available */}
              {post.subredditInfo && post.subredditInfo.icon_img && (
                <img src={post.subredditInfo.icon_img} alt="Subreddit Icon" className="subreddit-icon" />
              )}
              {/* Display author and subreddit information */}
              <p className="author-name">Posted by {post.author} in <span className="sub-name">r/{post.subreddit}</span></p>
            </div>
            {/* Container for post content */}
            <div className="post-content">
              {/* Display post title and body text (or a default message if no body text available) */}
              <h3>{post.title}</h3>
              <p>{post.selftext || 'No body text available'}</p>
            </div>
            {/* Container for vote information */}
            <div className="vote-info">
              {/* Display upvotes and downvotes */}
              <p>Upvotes: {post.ups}</p>
              <p>Downvotes: {post.downs}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThreadList;