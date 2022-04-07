package de.neuefische.booklibrary.repository;

import de.neuefische.booklibrary.model.Book;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class BookRepository {

    Map<String, Book> books = new HashMap<>();


    public Optional<Book> getBookByIsbn(String isbn) {
        Optional<Book> bookOptional = Optional.ofNullable(books.get(isbn));

        return bookOptional;
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

    public void deleteAll() {
        books = new HashMap<>();
    }
}
