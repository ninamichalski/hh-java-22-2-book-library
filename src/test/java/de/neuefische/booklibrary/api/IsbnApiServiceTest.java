package de.neuefische.booklibrary.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.booklibrary.model.Book;
import de.neuefische.booklibrary.model.IsbnBook;
import jdk.jfr.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.reactive.function.client.ClientRequest;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.ExchangeFunction;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class IsbnApiServiceTest {

    private IsbnApiService isbnApiService;
    private final ExchangeFunction exchangeFunction = mock(ExchangeFunction.class);

    @BeforeEach
    void init() {
        WebClient webClient = WebClient.builder()
                .exchangeFunction(exchangeFunction)
                .build();

        isbnApiService = new IsbnApiService(webClient);
    }

    @Test
    void retrieveBookByIsbn() throws JsonProcessingException {
        //GIVEN
        String isbn = "123";
        IsbnBook isbnBook = new IsbnBook("123", "my-book", "me");

        ObjectMapper objectMapper = new ObjectMapper();

        when(exchangeFunction.exchange(any(ClientRequest.class)))
                .thenReturn(Mono.just(ClientResponse
                        .create(HttpStatus.OK)
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .body(objectMapper.writeValueAsString(isbnBook))
                        //.body("{\"id\": \"123\", \"title\": \"my-book\", \"author\": \"me\"}")
                        .build()));
        //WHEN

        Book actual = isbnApiService.retrieveBookByIsbn(isbn);

        //THEN
        Book expected = new Book(isbn, "my-book");

        assertEquals(expected, actual);
    }

}
