import {Book} from "./Book";
import BookCard from "./BookCard";

type BookListProps = {
    books : Book[];
    deleteBook : (isbn : string) => void
}

export default function BookList(props : BookListProps) {
    return(
        <div>
            {props.books.map((book) =>
                    <BookCard book={book} key={book.isbn} deleteBook={props.deleteBook}/>)}
        </div>
    )
}