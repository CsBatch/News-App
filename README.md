![ToDoListCheckListGIF](https://github.com/user-attachments/assets/e3f4a956-11ff-4815-a900-cc2caaeca7dc)# my-svelte-project :-> News WebSite 📰

This is a simple news website built with [Svelte](https://svelte.dev/) that fetches and displays news articles using the [NewsAPI](https://newsapi.org/). The site allows users to filter news by categories like Science, Business, Technology, and Health.

## Table of Contents 📃

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)

## Features 👩‍💻
- **Category-based filtering**: Users can filter news articles by selecting categories such as Science, Business, Technology, and Health.
- **Responsive Design**: The site is responsive and works well on both desktop and mobile devices.
- **API Integration**: Fetches real-time news articles using the NewsAPI.

## Project Structure 🔗

```bash
/news-website
|-- /public
|   |-- /global.css             # Global CSS file
|-- /src
|   |-- /components
|   |   |-- Navbar.svelte        # Navbar component with categories
|   |   |-- NewsList.svelte      # Component to display list of news articles
|   |-- /stores
|   |   |-- newsStore.js         # Svelte store to manage state and API calls
|   |-- App.svelte               # Main application component
|   |-- main.js                  # Entry point for the Svelte app
|-- .env                         # Environment variables file (ignored by Git)
|-- .gitignore                   # Git ignore file
|-- package.json                 # Project dependencies and scripts
|-- rollup.config.js             # Rollup configuration file for building the project
|-- README.md                    # This readme file
```

## Setup ⚙️
1. Clone The Repository
   git clone https://github.com/CsBatch/my-svelte-project.git
   cd news-website

3. Install Dependencies
   npm install

4. Create a .env file
   VITE_NEWSAPI_KEY=your_api_key_here

5. Start the development Server
   npm run dev


## Usage 🎯
Navigation: Use the navigation bar to filter news articles by categories such as Science, Business, Technology, and Health.
Reading Articles: Click on a news headline to read the full article on the original news source.

## Contributions 🤝
Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

Steps to Contribute
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
