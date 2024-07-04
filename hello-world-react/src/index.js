import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const blueHeader = {
    color: 'blue'
};

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
        <p>For example, const = blueheader. Next, we included the usual HTML syntax for styling HTML elements. So, color: 'blue'</p>
    </div>);