import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const blueHeader = {
    color: 'blue'
};
const exampleExpression = 'This is an example expression.';

root.render(
    <div>
        <h1>Hello World</h1>
        <br></br>
        <h2 style={{ color: 'red' }}>Inline Styling using React</h2>
        <p>The h2 header tag above was styled using inline styling. Because the file we are working with 
            is a .js file and not an .html file the syntax for inline styling differs slightly.
            Curly braces are used instead of parenthesis when surrounding the CSS.            
        </p>
        <br></br>
        <h2 style={blueHeader}>Internal Styling using React</h2>
        <p>Now, the h2 header tag above was styled internally.</p>
        <p>First, we created a variable using the const declaration. We called our variable blueHeader.</p>
        <p>For example, const = blueHeader. Next, we included the usual HTML syntax for styling HTML elements. So, color: 'blue'</p>
        <br></br>
        <h2>Expressions in React</h2>
        <p>In React, we can store values inside variables. When we want to call the variable, we have to insert the variable inside
            an expression. We use curly braces to utilize expressions.
            For instance, the following text will call a variable and return its value using an expression.
        </p>
        <p><strong>{exampleExpression}</strong></p>
    </div>);