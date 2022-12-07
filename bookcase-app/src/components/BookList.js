import React from 'react';
import Book from './Book.js'

function BookList(book) {
//   const { title } = props.book.volumeInfo;
//   const { retailPrice } = props.book.saleInfo;
//   const { thumbnail } = props.book.volumeInfo.imageLinks;
// console.log(book)
  return <Book  
        // title = {title}
        // retailPrice = {retailPrice}
        // thumbnail = {thumbnail}
        addBook = {book.handleClick}
        book={book}
       />
}

export default BookList;