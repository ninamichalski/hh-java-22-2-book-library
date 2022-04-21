import "./BookCard.css"
import {Book} from "../model/Book";
import {Dispatch, SetStateAction} from "react";
import "./CreateBook.css"
import useCreateBook from "../hooks/useCreateBook";

type CreateBookProps = {
    books: Book[]
    setBooks: Dispatch<SetStateAction<Book[]>>
}

export default function CreateBook({books, setBooks}: CreateBookProps) {

    const {setNewTitle, setNewIsbn, handleSubmit} = useCreateBook(books, setBooks);

    return <div>
        Add new book
        <form className={"create-book"} onSubmit={handleSubmit}>
            <div>
                <label>New Title:
                    <input type="text"
                           className={"create-book__input"}
                           onChange={(e) => setNewTitle(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>New ISBN:
                    <input type="text"
                           className={"create-book__input"}
                           onChange={(e) => setNewIsbn(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <input type="submit" value={"✒️ Create"} className={"create-book__submit"}/>
            </div>

        </form>
    </div>;

}
