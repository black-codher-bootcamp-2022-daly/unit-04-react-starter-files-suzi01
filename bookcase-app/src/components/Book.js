import React from 'react';
import PropTypes from "prop-types";

// function Book(props) {
//   console.log(props)
//   return <div onClick={() => props.addBook(props.book.id)}>
//     <h1>{props.title}</h1>
//     <h3>{props.subtitle}</h3>
//     <h3>{props.authors}</h3>
//     <img src={props.thumbnail}></img>
//     </div>
// }

// function addBook(title){
//   console.log(`The Book ${title} was clicked`)
// }

function Book({book}) {
  const {title} = book.book.volumeInfo
  const { retailPrice } = book.book.saleInfo;
  const { thumbnail } = book.book.volumeInfo.imageLinks;
  const { description  } = book.book.volumeInfo;
  // console.log(book)
  return (
    <div style={{padding:'50px 20px', backgroundColor:"pink", margin:"5px"}}>
      <h3>{title}</h3>
      <img src={thumbnail} alt={title}></img>
      <p>{description}</p>
      {retailPrice && retailPrice.amount < 3 ? "Great deal" : "Best Seller"}
      <button style={{padding:"5px", margin:"5px", borderRadius:"5px", border:"none"}} onClick={() => book.handleClick(title)}>Add +</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};

export default Book;
