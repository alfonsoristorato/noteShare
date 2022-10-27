package com.alfonso.noteshare.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import java.util.List;


@Document("notes")
public class Note {
    @Id

    private String id;
    @NotEmpty
    private String note;
    @NotEmpty
    private String owner;
    private List<String> readers;

    public String getId() {
        return id;
    }

    public String getNote() {
        return note;
    }

    public String getOwner() {
        return owner;
    }

    public List<String> getReaders() {
        return readers;
    }

    public Note(String note, String owner, List<String> readers) {
        this.note = note;
        this.owner = owner;
        this.readers = readers;
    }

}
