# MyReads Project

A book Tracker application that helps you to keep track of your books by moving them between three shelves:
1- currently Reading
2-Want To Read
3- Read
#If you want to delete book from shelves:
select None
#If you want To search for book:
go to search page and type the name of book title or author
**Note that search terms are limited and you can find them at SEARCH_TERMS.md
#If you want to add from searched books to your shelves:
select the value of wanted shelf and it will appear in your main page in the specified shelf

#To install app
install all project dependencies with `npm install`

#To start app
start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for  app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js #  It is used for DOM rendering only.
    └── ListBooks.js #used to display all list of books with correct shelf
    └── OnlyBook.js #used to display individual book
    └── Search.js #used to display filtered array of books according to inputField
    └── Selection.js #used to display selected value of the shelf
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
