package com.alfonso.noteshare.repositories;

import com.alfonso.noteshare.models.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends MongoRepository<Note, String> {
    List<Note> findByOwner(String owner);
}
