package de.neuefische.booklibrary.model;

import lombok.AllArgsConstructor;
import lombok.Data;


@AllArgsConstructor
@Data
public class Book {

    private String isbn;
    private String title;
}
