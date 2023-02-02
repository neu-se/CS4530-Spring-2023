---
layout: page
title: Working with React Hooks
nav_exclude: true
---

# Transcript Client

This project provides [starter Code]({{ site.baseurl }}{% link Activities/module08-react-transcript-activity.zip %}) for an activity exploring React, Chakra-UI, and React Hooks.

After installing the dependencies (`npm install`), `npm start` can be used to launch the application in a local web browser. It retrieves transcripts from our REST example server and renders them in a page.

There are several extension points to build on:
* There are "sort by" options in the top bar. Selecting any of them will only print out the selection in the browser's JavaScript console, but will not sort the transcripts.
* If you click on a grade, it will convert to an "editable" cell - after pressing return, the new value should update the data on the server and display the new list.
* It would be useful to display a [toast alert](https://chakra-ui.com/docs/components/toast) to confirm that a grade was updated.
* There is currently no way to add students or grades. Add the necessary React hooks to the form components to add students and grades to the server, the list displayed should be updated as well.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.