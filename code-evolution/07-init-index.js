import React from 'react';
import { StrictMode } from 'react';
import {createRoot}  from 'react-dom/client'

//CSS
import './index.css'

//SETUP VARS
const books = [
  {
  id: 1,
  img: "https://m.media-amazon.com/images/I/81mpSoJzv4L._AC_UY218_.jpg",
  title: 'I Love To the moon and back',
  author: 'Amelia Hepworth'
},

{
  id: 2,
  img: "https://m.media-amazon.com/images/I/715mUao8RLL._AC_UY218_.jpg",
  title: 'Our class is family',
  author: 'Shanon Olsen'
},
{
  id: 3,
  img: "https://m.media-amazon.com/images/I/71AK2394CFL._AC_UY218_.jpg",
  title: 'The vanishing half',
  author: 'Brit Bennet'
}
]

function BookList(){
  return (
  <section className='booklist'>
   {books.map((book) => {
    return <div>
      <Book key={book.id} book={book}></Book>
    </div>
   })}
  </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props.book
  return <article className='book'>
    <img  src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}


const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);

