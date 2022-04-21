import {useEffect, useState} from "react";
import {Book} from "../model/Book";
import {getBooksByApi} from "../services/BooksApiService";


export default function useBooks(){

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getBooksByApi(setBooks);
    }, [])

    return {books, setBooks}
}
