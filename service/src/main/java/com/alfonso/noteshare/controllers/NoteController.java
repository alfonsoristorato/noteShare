package com.alfonso.noteshare.controllers;

import com.alfonso.noteshare.models.Note;
import com.alfonso.noteshare.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*")
@Validated
public class NoteController {
    @Autowired
    private NoteService noteService;

    @GetMapping
    @ResponseBody
    public ResponseEntity<List<Note>> getYourNotes ( @RequestParam String email){
        return new ResponseEntity<>(noteService.getYourNotes(email), HttpStatus.OK);
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<?> insert( @RequestBody  @Valid Note note)
      {


        noteService.saveNote(note);
        Map<String, String> responseObject = new HashMap<>();
        responseObject.put("description", "New record created in database");
        return new ResponseEntity<>(responseObject, HttpStatus.CREATED);

    }
}
