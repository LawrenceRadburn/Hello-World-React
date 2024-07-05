import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExampleComponent from './example';


const root = ReactDOM.createRoot(document.getElementById('root'));
const blueHeader = {
    color: 'blue'
};
const exampleExpression = 'This is an example expression.';
const firstExpression = 'React';
const secondExpression = 'is';
const thirdExpression = 'fun';

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
        <br></br>
        <h2>Concatenating Expressions in React</h2>
        <p>To concatenate two or more expressions in React, we use the + operator. In the following example, we'll concatenate three variables to produce a sentence.</p>
        <p><strong>{firstExpression + secondExpression + thirdExpression}</strong></p>
        <br></br>
        <h2>Template Literals in React</h2>
        <p>You may have noticed the setence above successfully concatenated the three variable but there was no spacing between the variables.
            We can use template literals to create a string and insert the variables in place of the word, or variable's value. This will
            help avoid having to manually input a space inside the value of our variable or add concatenation operators with empty strings between each word.
            Basically, template literals can help reduce the amount of code we have to write.
        </p>
        <p>The template literal begins by being wrapped in backticks. Then, to insert the variable, we wrap the variable inside an expression using curly
            braces preceded with a dollar sign. Here is an example:
        </p>
        <p><strong>{`I think that ${firstExpression} ${secondExpression} very ${thirdExpression}.`}</strong></p>
        <br></br>
        <h2>Components in React</h2>
        <p>To create a component in React, you should first create a separate file with React's .jsx file extension.
            We created a file called example.jsx in our src file.
        </p>
        <p>Make sure you import the React library using the import declation as follows: </p>
        <p>import React from 'react';</p>
        <p>To create a component in React, simply create a function. When finished, use the export declaration so the file can be imported in another file.</p>
        <p>Now, in this file we used import ExampleComponent from './example';</p>
        <p>Be sure to capitalize the first letter when naming your components or else React will treat them as DOM tags. Additionally, when importing
            and exporting the Components, the first letter must be capitialized as well.
        </p>
        <p>React knows the file extension so we don't have to include it.</p>
        <p>When placing the function with React, is has to be wrapped in opening and closing tags.</p>
        <p>Finally, we can insert the function wherever we like. Here is the function below:</p>
        <p><ExampleComponent /></p>
        <p>Components in React can be used multiple times. This saves developers time when we want to reuse code.
            Here is an example where we can reuse the same component several times in a row.
        </p>
        <p><ExampleComponent /></p>
        <p><ExampleComponent /></p>
        <p><ExampleComponent /></p>
    </div>);