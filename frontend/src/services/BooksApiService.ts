import {Book} from "../model/Book";
import axios from "axios";
import {Dispatch, SetStateAction} from "react";


export function getBooksByApi() {
    return axios.get("/book")
        .then(response => response.data)
        .catch(console.error)
}

export function postBookByApi(book: Book) {
    return axios.post("/book", book)
        .then(response => response.data)
        .catch(console.error)
}
