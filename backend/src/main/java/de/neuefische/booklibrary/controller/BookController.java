package de.neuefische.booklibrary.controller;

import de.neuefische.booklibrary.model.Book;
import de.neuefische.booklibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }


    @GetMapping("/{isbn}")
    public Book getBookByIsbn(@PathVariable String isbn){
        return bookService.getBookByIsbn(isbn);
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public Book addBook(@RequestBody Book newBook){
        return bookService.addBook(newBook);
    }

    @DeleteMapping("/{isbn}")
    public void deleteBook(@PathVariable String isbn){
        bookService.deleteBook(isbn);
    }

    @PutMapping("/{isbn}")
    public Book addBookByIsbn(@PathVariable String isbn, @RequestBody Book book) {
        return bookService.addBookByIsbn(isbn, book);
    }
}
