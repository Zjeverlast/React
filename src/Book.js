import React from 'react'

const Book = (props) => {
  const clickHandler = () => {
    alert('Added to cart')
  }
  const {img, title, author, price} = props
  return <article onMouseOver={() => {console.log(author)}} className='book'>
    <img  src={img} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <p>{price}</p>
    <button type='button' onClick={clickHandler} >Add To Cart</button>
  </article>
}

export default Book