import {Book} from "../model/Book";
import axios from "axios";
import {Dispatch, SetStateAction} from "react";


export function getBooksByApi(setBooks: Dispatch<SetStateAction<Book[]>>) {
    axios.get("/book")
        .then(response => response.data)
        .then(data => setBooks(data))
        .catch(console.error)
}

export function postBookByApi(book: Book) {
    axios.post("/book", book)
        .then(response => response.data)
        .catch(console.error)
}
