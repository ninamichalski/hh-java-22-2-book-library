package de.neuefische.booklibrary.service;

import de.neuefische.booklibrary.model.Book;
import de.neuefische.booklibrary.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book getBookByIsbn(String isbn) {
        return bookRepository.getBookByIsbn(isbn)
                .orElseThrow( () -> new NoSuchElementException("Book not found with isbn: " + isbn));
    }

    public List<Book> getAllBooks() {
        return bookRepository.getAllBooks();
    }

    public Book addBook(Book newBook) {
        return bookRepository.addBook(newBook.getIsbn(), newBook);
    }

    public void deleteBook(String isbn) {
        Optional<Book> book = bookRepository.getBookByIsbn(isbn);

        if(book.isEmpty()){
            System.out.println("Book was not real, it didn't exist in the fist place!");
        } else {
            bookRepository.deleteBook(isbn);
        }
    }

    public Book addBookByIsbn(String isbn, Book book) {
        bookRepository.addBook(isbn, book);
        return book;
    }
}
