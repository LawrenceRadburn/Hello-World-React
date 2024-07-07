# Hello-World-React

## Introduction
This is my first React app.

## Creation
Using Visual Studio Code, I entered npx create-react-app hello-world-react into the terminal to establish my first React app.

Next, I used the cd (change directory) command in PowerShell to navigate to the directory of my app.

Finally, used used npm start to create the React app.

## Clean Up Process
React has created a number of files by default. For our simple app, we don't need many of these files. It's important to be aware ahead of time that deleting the default files will create erorrs on on React app. Therefore, after the files are deleted we'll also delete any functions and import statements. The following are the files I chose to modified.

### Deleted:

##### setupTests.js
##### reportWebVitals.js
##### logo.svg
##### App.js
##### App.test.js
##### App.css

### Modified:

#### index.js
In order to clear the error on my React app, I deleted the following lines in this file:

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<React.StrictMode>
<App />
</React.StrictMode>

reportWebVitals();

## Working Within the .Render() Method

Within the .Render() method I added some HTML to display content to the DOM.

## Using Inline and Internal Styling
Styling in React is simple and only differs slightly from the syntax used in HTML.

## Concatenating Variables
Just like in JavaScript, you can concatenate variables which can be rendered and displayed with HTML.

## Template Literals
To simplify concatenation, we can use template literals inside HTML elements to add content and insert variables as needed all on one line. This removes the need to concatenate empty strings between variables in place of spaces between variables.

## Importing React

When making new files with the intention of using the React.js library we first have to use the import declaration. To import the React library into a new file, simply type import React from "react";

## Components in React
Components are reusable blocks of code. To make a component, we first should create a new .jsx file and import React.
Using a function with syntax similar to JavaScript we can create our component and export the component.
This allows us to import the function, or component in another file and reuse the code as needed.

## Props in React
We can insert arguments inside our components and attribute the property values expression to dynamically add content.