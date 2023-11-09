export const API_ROOT = 'https://www.reddit.com';

export const getPostsFromSubreddits = async (subredditNames) => {
  try {
    const posts = [];

    for (const subreddit of subredditNames) {
      const response = await fetch(`${API_ROOT}/r/${subreddit}/hot.json?limit=10`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error(`Failed to fetch data from subreddit: ${subreddit}`);
      }

      const json = await response.json();
      const subredditPosts = json.data.children.map((post) => post.data);
      posts.push(...subredditPosts);
    }

    return posts;
  } catch (error) {
    throw error;
  }
};
