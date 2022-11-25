import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import BookList from './Components/BookList';
import NewBook from "./Components/NewBook";


function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        axios.get("/api/book/")
            .then((response) => {return response.data
            })
            .then((books) => {setBooks(books)
            })
            .catch(error => {console.error(error)})
    }

    const addBooks = (title:string, author:string, isbn:string) => {
        let newBook = {
            title: title,
            author: author,
            isbn: isbn,
        }
        axios.post("/api/book/", newBook)
            .then((response) => {return response.data
            })
            .then(getBooks)
    }

    const deleteBook = (isbn: string) => {

        axios.delete("/api/book/" + isbn)
            .then(getBooks)
    }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Book library</h1>
      </header>
        <BookList books={books} deleteBook={deleteBook}/>
        <NewBook newBook={addBooks}/>
    </div>
  );
}

export default App;
