---
layout: page
title: Working with React Hooks
nav_exclude: true
---

# Working with React, Chakra-UI, and React Hooks
This activity is intended to supplement the CS4530 lecture on patterns of react.


## Transcript Client

This project provides starter code for an activity exploring React, Chakra-UI, and React Hooks.

Download and unpack the  [starter Code]({{ site.baseurl }}{% link Activities/module08-react-transcript-activity.zip %}). After installing the dependencies (`npm install`), `npm start` can be used to launch the application in a local web browser. It retrieves transcripts from our REST example server and renders them in a page.

There are several extension points to build on:
* There are "sort by" options in the top bar. Selecting any of them will only print out the selection in the browser's JavaScript console, but will not sort the transcripts.
* If you click on a grade, it will convert to an "editable" cell - after pressing return, the new value will show in the page (and be printed to the console), but will not be sent to the server. This could be changed to update the data on the server
* It would be useful to display a [toast alert](https://chakra-ui.com/docs/components/toast) to confirm that a grade was updated
* There is currently no way to add students or grades
* The current UI could be greatly enhanced with some styling, using the available [chakra-ui library](https://chakra-ui.com/docs/components)

When you are done, submit your work as required by your instructor.  This may vary from section to section.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.