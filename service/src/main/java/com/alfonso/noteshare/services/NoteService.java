package com.alfonso.noteshare.services;

import com.alfonso.noteshare.models.Note;
import com.alfonso.noteshare.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    public List<Note> getYourNotes(String ownerEmail){
        return noteRepository.findByOwner(ownerEmail);
    }

    public void saveNote (Note note){
        noteRepository.insert(note);
    }
}
