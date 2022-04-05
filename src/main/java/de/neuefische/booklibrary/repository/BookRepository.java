package de.neuefische.booklibrary.repository;

import de.neuefische.booklibrary.model.Book;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class BookRepository {

    Map<String, Book> books = new HashMap<>();



    public Book getBookByIsbn(String isbn) {
        if(!books.containsKey(isbn)){
            throw new NoSuchElementException();
        }

        return books.get(isbn);
    }

    public List<Book> getAllBooks() {
        return new ArrayList<>(books.values());
    }

    public Book addBook(Book newBook) {
        books.put(newBook.getIsbn(), newBook);

        return newBook;
    }

    public void deleteBook(String isbn) {
        books.remove(isbn);
    }
}
