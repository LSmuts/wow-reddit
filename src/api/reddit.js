// API root for Reddit
export const API_ROOT = 'https://www.reddit.com';

// Function to get recent posts from specified subreddits and sorting criteria
export const getRecentPostsFromSubreddits = async (subredditNames, sortBy) => {
  try {
    // Array to store fetched posts
    const posts = [];

    // Loop through each specified subreddit
    for (const subreddit of subredditNames) {
      // Introduce a delay between requests to comply with Reddit API guidelines
      await new Promise(resolve => setTimeout(resolve, 8000)); // 8 seconds delay

      // Construct the URL based on the sortBy parameter
      let apiUrl;
      switch (sortBy) {
        case 'hot':
          apiUrl = `${API_ROOT}/r/${subreddit}/hot.json?limit=10`;
          break;
        case 'newest':
          apiUrl = `${API_ROOT}/r/${subreddit}/new.json?limit=10`;
          break;
        case 'best':
          apiUrl = `${API_ROOT}/r/${subreddit}/top.json?t=week&limit=10`;
          break;
        default:
          apiUrl = `${API_ROOT}/r/${subreddit}/new.json?limit=10`;
      }

      // Fetch recent posts from the constructed URL
      const postsResponse = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      // Check if the request was successful (status code 200)
      if (postsResponse.status !== 200) {
        throw new Error(`Failed to fetch data from subreddit: ${subreddit}`);
      }

      // Parse the JSON response to get post data
      const postsJson = await postsResponse.json();
      const subredditPosts = postsJson.data.children.map((post) => post.data);

      // Fetch subreddit information to include in each post
      const subredditInfoResponse = await fetch(`${API_ROOT}/r/${subreddit}/about.json`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      // Check if the request for subreddit information was successful
      if (subredditInfoResponse.status !== 200) {
        throw new Error(`Failed to fetch subreddit info: ${subreddit}`);
      }

      // Parse the JSON response to get subreddit information
      const subredditInfoJson = await subredditInfoResponse.json();
      const subredditInfo = subredditInfoJson.data;

      // Add subreddit information to each post
      const postsWithSubredditInfo = subredditPosts.map((post) => ({
        ...post,
        subredditInfo,
      }));

      // Add posts with subreddit information to the overall array
      posts.push(...postsWithSubredditInfo);
    }

    // Return the array of posts
    return posts;
  } catch (error) {
    // If any error occurs during the process, throw the error
    throw error;
  }
};