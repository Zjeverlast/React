import React from 'react';
import { StrictMode } from 'react';
import {createRoot}  from 'react-dom/client'

//CSS
import './index.css'

function BookList(){
  return (
  <section className='booklist'>
    <Book/>
  </section>
  );
}

const Book = () => {
  return <article className='book'>
    <img  src="https://m.media-amazon.com/images/I/81mpSoJzv4L._AC_UY218_.jpg" alt="" />
    <h1>I Love To the moon and back</h1>
    <h4>Amelia Hepworth</h4>
  </article>
}


const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);

