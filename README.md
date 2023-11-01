# Reddit Client App for World of Warcraft Enthusiasts

[App screenshot will be placed here later]

## Overview

This is a Reddit client app built with React and Redux, designed to cater to World of Warcraft enthusiasts. It provides a user-friendly interface to access and interact with threads from specific subreddits related to World of Warcraft.

## Features

- **Homepage**: The main landing page displaying a mix of trending threads from selected World of Warcraft subreddits.
- **Sidebar**: A sidebar on the right containing featured subreddits for easy navigation.
- **Subreddit-Specific Threads**: Clicking on a specific subreddit in the sidebar displays threads exclusively from that subreddit.
- **Search Functionality**: A search bar at the top allows users to search for specific threads or subreddits and provides autocomplete suggestions.
- **Sorting Options**: Sort threads by hot, new, or top threads.
- **Error Handling**: An error page is displayed in case of any errors or issues.

## File Structure

The project follows a clear file structure:

- **src/**
  - **components/**: Contains presentational components.
  - **containers/**: Includes container components for Redux integration.
  - **actions/**: Defines Redux action creators.
  - **reducers/**: Manages Redux state with reducers.
  - **store.js**: Sets up the Redux store and middleware.
  - **App.js**: The main application component.
  - **index.js**: Entry point of the application.
  - **routes.js**: Defines application routes.

## Technologies Used

- React
- Redux
- React Router
- Reddit API (for fetching data)
- HTML and CSS

## Licence

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to the Reddit API for providing the data for this app.