package com.alfonso.noteshare.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document("notes")
public class Note {
    @Id
    private int id;
    private String note;
    private String owner;
    private List<String> readers;

    public Note(String note, String owner, List<String> readers) {
        this.note = note;
        this.owner = owner;
        this.readers = readers;
    }
}
