import "./BookCard.css"
import {Book} from "../model/Book";
import {FormEvent, useState} from "react";
import "./CreateBook.css"
import {postBookByApi} from "../services/BooksApiService";

type CreateBookProps = {
    addBook: (newBook: Book) => void
}

export default function CreateBook({addBook}: CreateBookProps) {

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
            .then(addBook)
    }

    return <div>
        Add new book
        <form className={"create-book"} onSubmit={handleSubmit}>
            <div>
                <label>New Title:
                    <input type="text"
                           value={newTitle}
                           className={"create-book__input"}
                           onChange={(e) => setNewTitle(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>New ISBN:
                    <input type="text"
                           value={newIsbn}
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
