import {Book} from "./Book";
import "./BookCard.css"

type BookCardProps = {
    book : Book;
    deleteBook : (isbn : string) => void
}

export default function BookCard(props : BookCardProps) {
    return(
        <div className="book-card">
            <h3>Title: {props.book.title}</h3>
            <h3>Author: {props.book.author}</h3>
            <h3>ISBN: ({props.book.isbn})</h3>
            <button onClick={() => props.deleteBook(props.book.isbn)}>Delete this book</button>
        </div>

    )


}