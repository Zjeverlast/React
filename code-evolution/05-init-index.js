import React from 'react';
import { StrictMode } from 'react';
import {createRoot}  from 'react-dom/client'

//CSS
import './index.css'

//SETUP VARS
const firstBook = {
  img: "https://m.media-amazon.com/images/I/81mpSoJzv4L._AC_UY218_.jpg",
  title: 'I Love To the moon and back',
  author: 'Amelia Hepworth'
}

const secondBook = {
  img: "https://m.media-amazon.com/images/I/715mUao8RLL._AC_UY218_.jpg",
  title: 'Our class is family',
  author: 'Shanon Olsen'
}
  
function BookList(){
  return (
  <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
  </section>
  );
}

const Book = (props) => {
  console.log(props)
  return <article className='book'>
    <img  src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
}


const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);

