package de.neuefische.booklibrary.controller;

import de.neuefische.booklibrary.model.Book;
import de.neuefische.booklibrary.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class BookControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private BookRepository bookRepository;


    @DirtiesContext
    @Test
    void getAllBooks() throws Exception {
        //GIVEN
        Book book1 = new Book("1234", "test-title", "test-author");
        bookRepository.addBook("1234", book1);

        //WHEN &THEN

        mockMvc.perform(get("/api/book"))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                        [{"isbn":"1234","title":"test-title","type":"HARD_COVER"}]"""));
    }

    @DirtiesContext
    @Test
    void addBook() throws Exception {
        //GIVEN
        //WHEN & THEN
        mockMvc.perform(
                put("/api/book/1234")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content("""
                        {"isbn": "1234","title": "test-title","type": "HARD_COVER"}
                        """))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                        {"isbn":"1234","title":"test-title","type":"HARD_COVER"}"""));
    }
}
