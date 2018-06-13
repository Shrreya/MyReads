# My Reads Project

This is the first project in the React Nanodegree Program by Udacity.

The aim is to use React to create a bookshelf app that allows the user to select and categorise books they have read, are currently reading, or want to read.

The project has been developed using the starter template provided by Udacity which includes basic static UI, an API server and client library. The project can also be bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app).

## TL;DR

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* access the app on http://localhost:3000/

## Project Structure
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, can be changed later.
│   └── index.html # App static template.
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── components # Composable React Components.
    │   ├── Book.js # React Component displaying book details.
    │   ├── BookShelfChanger.js # React Component to view & modify shelf for a book.
    │   ├── ListBooks.js # React Component displaying books stacked in three shelves.
    │   ├── SearchBar.js # React Component to search for books.
    │   ├── SearchBooks.js # React Component displaying search book results.
    ├── icons # Image resources for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── utils # Utility code.
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

## Backend Server

To simplify the development process, Udacity has provided a backend server for students to develop against. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* getAll
* update
* search

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
