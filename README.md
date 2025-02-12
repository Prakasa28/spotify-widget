# Spotify Playlist Widget 🎵

A React-based widget that fetches and displays Spotify playlists in an expandable format. Built with clean design principles and no styling frameworks.

## Features

- Displays playlists with titles and cover images
- Expands to show tracks and artists
- Uses the Spotify API for data fetching
- No Bootstrap or other styling frameworks

## Tech Stack

- React (with optional TypeScript)
- SASS/SCSS for styling

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

Using npm:

```sh
npm install
```

Using yarn:

```sh
yarn install
```

### 3. Start the Development Server

Using npm:

```sh
npm run dev
```

Using yarn:

```sh
yarn dev
```

The application will be available at `http://localhost:5173/` (default Vite port).

## Available Scripts

- ```sh
  npm run dev
  ```

  or

  ```sh
  yarn dev
  ```

  - Start the development server

- ```sh
  npm run build
  ```

  or

  ```sh
  yarn build
  ```

  - Build the application for production

- ```sh
  npm run preview
  ```

  or

  ```sh
  yarn preview
  ```

  - Preview the production build

- ```sh
  npm run lint
  ```
  or
  ```sh
  yarn lint
  ```
  - Run linting checks

## Building for Production

To build the application for production, run:

```sh
npm run build
```

This will create an optimized `dist/` folder containing the final build.

## Deployment

To deploy the application, serve the contents of the `dist/` folder using a static server or deploy it to services like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## Environment Variables

Create a `.env` file in the root directory to store environment variables:

```env
VITE_API_URL=https://api.example.com
```

Access variables in your code using:

```js
import.meta.env.VITE_API_URL;
```

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```sh
   git checkout -b feature-name
   ```
3. Commit changes:
   ```sh
   git commit -m 'Add feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
