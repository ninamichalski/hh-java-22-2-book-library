import './App.css';
import BookList from './Components/BookList';
import NewBook from "./Components/NewBook";
import useBook from "./Hooks/useBook";


function App() {

const {books, addBooks, deleteBook} = useBook()

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
