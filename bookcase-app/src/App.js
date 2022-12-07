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
  const [books, setBooks] = useState(data)

  function addBook(title){
    // console.log('hello')
    console.log(`The Book ${title} was clicked`)
  }

  // const books = data

 async function findBooks(value){
  const url = `https://www.googleapis.com/books/v1/volumes?q=${value}}&filter=paid-ebooks&print-type=books&projection=lite`

  
  const results = await fetch(url).then(res => res.json());
  console.log(results)
  if(!results.error){
    setBooks(results.items)
  }
  }
  


  function Home() {
    const [keyword, setKeyword] = useState("")
    return <>
            <Header />
            <h2>Welcome to the Bookcase App</h2>
            <Search keyword={keyword} setKeyword={setKeyword} findBooks={findBooks}/>
            {books.map((book) => <BookList key={book.id} book={book} handleClick={addBook} />)}
            {/* <BookList book={books} /> */}
          </>
  }

  function BookCase() {
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
 