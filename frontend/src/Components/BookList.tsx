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
                <div>
                    <BookCard book={book} deleteBook={props.deleteBook}/>
                </div>)}
        </div>

    )


}