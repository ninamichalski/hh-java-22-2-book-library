import "./BookCard.css"
import {Book} from "../model/Book";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import "./CreateBook.css"
import {postBookByApi} from "../services/BooksApiService";

type CreateBookProps = {
    books: Book[]
    setBook: Dispatch<SetStateAction<Book[]>>
}

export default function CreateBook({books, setBook}: CreateBookProps) {

    const [newTitle, setNewTitle] = useState<string>();
    const [newIsbn, setNewIsbn] = useState<string>();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newTitle === undefined || newIsbn === undefined) {
            alert(`Please fill book title and isbn`)
            return
        }

        const newBook: Book = {
            title: newTitle,
            isbn: newIsbn
        }

        postBookByApi(newBook)
        setBook([...books, newBook])

    }

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
