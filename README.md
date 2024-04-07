# FoodiFy: Food Recipe Generator with Vite + React, Tailwind CSS, and Spoonacular API

## Table of Contents

- [Project Setup](#project-setup)
- [Development Server](#development-server)
- [Building for Production](#building-for-production)
- [Using FoodiFy](#using-foodify)
- [Contributing](#contributing)
- [License](#license)

---

## Limitations

There is a limitation about the spoonacular API (I am giving you only one API key for use but it will expire after 150 calls overall) that it only allows 150 calls per day so .... you can go to --

```bash
    https://tempmailo.com/
 ```
and create an API key in --

```bash
https://spoonacular.com/food-api
```
as many as you want and change that api key in (.env file after creating that file).

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
![Screenshot 2024-04-08 002444](https://github.com/ArunavaCoderEm/Foodify-Recipe-Home/assets/121813676/eea16569-4238-46bf-9550-d7f73915533b)
![Screenshot 2024-04-08 002414](https://github.com/ArunavaCoderEm/Foodify-Recipe-Home/assets/121813676/1d3e8ecb-7d27-406e-baa7-0d652edaa0ce)
![Screenshot 2024-04-08 002351](https://github.com/ArunavaCoderEm/Foodify-Recipe-Home/assets/121813676/0c2a6a97-b402-4203-9d6c-07e1a2e30f51)
![Screenshot 2024-04-08 002330](https://github.com/ArunavaCoderEm/Foodify-Recipe-Home/assets/121813676/7178224e-17e0-469e-ba61-51e3e2d1776b)
![Screenshot 2024-04-08 002312](https://github.com/ArunavaCoderEm/Foodify-Recipe-Home/assets/121813676/d406e71a-a2ef-4436-9c06-49333d9a1f91)
![Screenshot 2024-04-08 002250](https://github.com/ArunavaCoderEm/Foodify-Recipe-Home/assets/121813676/4f55e20b-6a8a-4504-a53f-b5ca0165a8e0)
![Screenshot 2024-04-08 002237](https://github.com/ArunavaCoderEm/Foodify-Recipe-Home/assets/121813676/e03ee9a4-d260-4dcd-9798-d240d36850ca)


## Contributing

We welcome contributions to FoodiFy! Please refer to the CONTRIBUTING.md file for guidelines on creating pull requests, code style, and testing practices.

## License

This project is licensed under the MIT License (see LICENSE file).
