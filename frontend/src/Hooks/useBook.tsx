import {useEffect, useState} from "react";
import axios from "axios";
import {Book} from "../Components/Book";


export default function useBook() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        axios.get("/api/book/")
            .then((response) => {return response.data
            })
            .then((books) => {setBooks(books)
            })
            .catch(error => {console.error(error)})
    }

    const addBooks = (title:string, author:string, isbn:string) => {
        let newBook = {
            title: title,
            author: author,
            isbn: isbn,
        }
        axios.post("/api/book/", newBook)
            .then(getBooks)
    }

    const deleteBook = (isbn: string) => {

        axios.delete("/api/book/" + isbn)
            .then(getBooks)
            .catch(console.error)
    }


    return (
        {books, addBooks, deleteBook}
    )
}