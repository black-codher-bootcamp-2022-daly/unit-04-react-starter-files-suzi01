import React, {useState} from 'react';
// import Book from './components/Book';
import data from './models/books.json';
import BookList from './components/BookList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import About from './pages/About';
import Search from './components/Search';



// function createBook(card){
//   return <Book title = {card.volumeInfo.title}
//               subtitle = {card.volumeInfo.subtitle}
//               authors = {card.volumeInfo.authors}
//               thumbnail = {card.volumeInfo.imageLinks.thumbnail}

//   />
// }

// function App() {
//   const books = data;
//   const styling = {backgroundColor:"red",
//                   padding:"25px",
//                   margin:"10px"}
//   return <div style={styling}>
//      {books.map(createBook)}
//   </div>
 
// }

// export default App;

function App() {

  function addBook(title){
    // console.log('hello')
    console.log(`The Book ${title} was clicked`)
  }

  // const books = data
  


  function Home() {
    const [books] = useState(data);
    const [keyword, setKeyword] = useState("")
    // console.log("This", books)
    return <>
            <Header />
            <h2>Welcome to the Bookcase App</h2>
            <Search keyword={keyword} setKeyword={setKeyword} />
            {books.map((book) => <BookList key={book.id} book={book} handleClick={addBook} />)}
            {/* <BookList book={books} /> */}
          </>
  }

  function BookCase() {
    const [books] = useState(data);
    // console.log("This", books)
    return <>
            <Header />
            {/* <BookList book={books} /> */}
            {/* {books.map((book) => <BookList key={book.id} book={book} handleClick={addBook} />)} */}
          </>
  }

  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookcase" element={<BookCase />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>



  {/* {books.map((book) => <BookList key={book.id} book={book} handleClick={addBook} />)} */}
  </div>
}




export default App;
 