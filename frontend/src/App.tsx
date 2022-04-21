import React from 'react';
import logo from './library.png';
import './App.css';
import BookOverview from "./components/BookOverview";
import useBooks from './hooks/useBooks';
import CreateBook from "./components/CreateBook";


export default function App() {

  const {books, setBooks} = useBooks();

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          My Little Library
          <BookOverview books={books} />
          <CreateBook books={books} setBook={setBooks}  />
        </header>
      </div>
  );
}
