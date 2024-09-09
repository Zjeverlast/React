import React from 'react';
import {createRoot}  from 'react-dom/client'

function WelcomeMsg(){
  return (
  <div>
    <ul>
      <h3>Hello Reacters</h3>
      <li>
        <a href="http://localhost:3000/">Welcome Reacters</a>
      </li>
      <img src="" alt="" />
      <input type="text" name="" id="" />
    </ul>
  </div>
  );
}


//NESTING  COMPONENTS
function WelcomeMsg(){
  return (
  <div>
    <Person/>
    <Message/>
    <p>Keep coding...</p>
  </div>
  );
}

const Person = () =>  <h2>Joeweb React journey</h2>
const Message = () => {
  return <p>A journey begins with a step</p>
}


//ALTERNATIVE TO THE ABOVE FUNCTION
// const Greeting = () => {
// return React.createElement(
//   'div', 
//   {}, 
//   React.createElement('h1', {}, 'Hello world!') )
// }


//ReactDom.render(<WelcomeMsg/>, document.getElementById('root'));

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<WelcomeMsg/>);

