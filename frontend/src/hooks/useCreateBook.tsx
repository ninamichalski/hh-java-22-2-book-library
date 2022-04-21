import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {Book} from "../model/Book";
import { postBookByApi} from "../services/BooksApiService";


export default function useCreateBook(books : Book[], setBooks: Dispatch<SetStateAction<Book[]>>){

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
            .then(book => setBooks([...books, book]))
    }

    return {handleSubmit, setNewIsbn, setNewTitle, newTitle, newIsbn}
}
