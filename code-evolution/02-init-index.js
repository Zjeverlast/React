import React from 'react';
import { StrictMode } from 'react';
import {createRoot}  from 'react-dom/client'

//CSS
import './index.css'

function BookList(){
  return (
  <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = () => {
  return <article className='book'>
    <Image/>
    <Title/>
    <Author/>
  </article>
}
const Image = () => <img src="https://m.media-amazon.com/images/I/81mpSoJzv4L._AC_UY218_.jpg" alt="" />
const Title = () => <h1>I Love To the moon and back</h1>
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Amelia Hepworth</h4>

//ALTERNATIVE TO THE ABOVE FUNCTION
// const Greeting = () => {
// return React.createElement(
//   'section', 
//   {}, 
//   React.createElement('h1', {}, 'Hello world!') )
// }


//ReactDom.render(<WelcomeMsg/>, document.getElementById('root'));

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);

