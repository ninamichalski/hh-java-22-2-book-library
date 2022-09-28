import {Book} from "./Book";

type BookCardProps = {
    book : Book;
    deleteBook : (isbn : string) => void
}

export default function BookCard(props : BookCardProps) {
    return(
        <div>
            <h3>
                {props.book.title} : {props.book.author}
                <button onClick={() => props.deleteBook(props.book.isbn)}>Delete this book</button>
            </h3>
        </div>

    )


}