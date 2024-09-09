import React from 'react';
import { StrictMode } from 'react';
import {createRoot}  from 'react-dom/client'

//CSS
import './index.css'

//SETUP VARS
const title = 'I Love To the moon and back'
const author = 'Amelia Hepworth'
const img = "https://m.media-amazon.com/images/I/81mpSoJzv4L._AC_UY218_.jpg"
  
function BookList(){
  return (
  <section className='booklist'>
    <Book job='developer'/>
    <Book/>
  </section>
  );
}

const Book = (props) => {
  console.log(props)
  return <article className='book'>
    <img  src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{props.job}</p>
  </article>
}


const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);

