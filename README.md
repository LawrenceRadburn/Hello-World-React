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