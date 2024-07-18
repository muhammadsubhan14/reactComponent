# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Movie App
A simple web-based application to search and display movies using The Movie Database (TMDB) API.

Clone the repository:
https://github.com/muhammadsubhan14/reactComponent.git

Navigate to the project directory:
cd app

Install the dependencies:
npm install

Start the development server:
npm run dev

Open your browser and navigate to http://localhost:5173 to view the app

Home Pages
The Home pages serves as the main entry point of the application. It renders the Movie component.

Movie Component
The Movie component handles fetching and displaying movies from the TMDB API. It includes a search bar to allow users to search for movies.

Search Component
The Search component provides a styled search bar but is currently not used in the main application.

API Integration
The application fetches movie data from The Movie Database (TMDB) API. Ensure you have an API key from TMDB and set it in your environment variables.

Styling
Styled-components is used for styling the components. Styles are defined using tagged template literals.

Credits
The Movie Database (TMDB) API
React
Styled-components
Axios