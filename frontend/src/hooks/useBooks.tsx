import {useEffect, useState} from "react";
import {Book} from "../model/Book";
import {getBooksByApi} from "../services/BooksApiService";


export default function useBooks() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getBooksByApi()
            .then(data => setBooks(data));
    }, [])

    const addBook = (newBook: Book) => {   //[book1, book2, book3 ,  ... , newBook ]
        setBooks((allBooks) => [...allBooks, newBook])
    }

    return {books, addBook}
}
