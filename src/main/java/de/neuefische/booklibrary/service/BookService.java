package de.neuefische.booklibrary.service;

import de.neuefische.booklibrary.model.Book;
import de.neuefische.booklibrary.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book getBookByIsbn(String isbn) {
        return bookRepository.getBookByIsbn(isbn);
    }

    public List<Book> getAllBooks() {
        return bookRepository.getAllBooks();
    }

    public Book addBook(Book newBook) {
        return bookRepository.addBook(newBook);
    }

    public void deleteBook(String isbn) {
        bookRepository.deleteBook(isbn);
    }
}
