import {Book} from "../model/Book";
import BookCard from "./BookCard";

type BookOverviewProps = {
    books: Book[]
}

export default function BookOverview({books}: BookOverviewProps) {
    return <div>
        {books.map((book) => <BookCard key={book.isbn} book={book}/>)}
    </div>
}
