import React from 'react';
import { StrictMode } from 'react';
import {createRoot}  from 'react-dom/client'

//CSS
import './index.css'

import {books} from './books'
import Book from './Book';

function BookList(){
  return (
  <section className='booklist'>
   {books.map((book, index) => {
    return <div>
      <Book key={book.id} {...book}></Book>
    </div>
   })}
  </section>
  );
}


const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);

