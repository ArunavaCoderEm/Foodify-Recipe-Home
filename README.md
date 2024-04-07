# FoodiFy: Food Recipe Generator with Vite, React, Tailwind CSS, and Spoonacular API

## Table of Contents

- [Project Setup](#project-setup)
- [Development Server](#development-server)
- [Building for Production](#building-for-production)
- [Using FoodiFy](#using-foodify)
- [Contributing](#contributing)
- [License](#license)

---

## Project Setup

### Prerequisites

- Node.js (version 14 or later) and npm (or yarn) installed on your system. You can verify this by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.

### Clone the Repository

```bash
git clone https://github.com/your-username/foodify.git
cd foodify
```

### Install Dependencies

```bash
npm install
```
OR IF YOU PREFER YARN
```bash
yarn install
```
## Development Server
### Start the Server

```bash
npm run dev
```
OR IF YOU PREFER YARN
```bash
yarn dev
```
This will start the development server at http://localhost:3000 by default.

## Building for Production
### Production Build

```bash
npm run build
```
OR IF YOU PREFER YARN
```bash
yarn build
```

This will create an optimized production build in the dist folder, ready for deployment to a web server.

## Using FoodiFy
### Spoonacular API Key

To use the Spoonacular API, you'll need a free API key. Obtain one from Spoonacular Pricing.
Create a (.env) file in the project's root directory (exclude this file from version control) and add the following line, replacing YOUR_API_KEY with your actual key :

```bash
VITE_APP_SPOONACULAR_API_KEY=YOUR_API_KEY
```

## Search for Recipes

1. Enter your desired ingredients or keywords in the search bar.
2. Click the "Search" button or press Enter to initiate the search using the Spoonacular API.
3. FoodiFy will display a list of matching recipes along with relevant information.

## View Recipe Details

1. Click on a recipe card to view its detailed information, including ingredients, instructions, and optional nutritional data (if available from the API).

## Images

## Contributing

We welcome contributions to FoodiFy! Please refer to the CONTRIBUTING.md file for guidelines on creating pull requests, code style, and testing practices.

## License

This project is licensed under the MIT License (see LICENSE file).
