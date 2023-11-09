// For displaying threads

import React, { useEffect, useState } from 'react';
import { getPostsFromSubreddits } from '../../api/reddit'; // Import the API function

import './ThreadList.css';

function ThreadList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const initialSubreddits = ['wow', 'warcraftlore', 'classicwow', 'wowhardcore', 'World_of_Warcraft'];

    // Fetch data using the API function
    getPostsFromSubreddits(initialSubreddits)
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default ThreadList;