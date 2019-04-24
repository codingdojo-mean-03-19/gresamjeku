import { Component, OnInit } from '@angular/core';

import { Note } from '../../models';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      console.log(notes);
      this.notes = notes;
    })
  }

  onCreate(note:Note){
    console.log('creating note', note);
    this.noteService.createNote(note)
    .subscribe(createdNote => {
      console.log(createdNote)
      this.notes.push(createdNote);
    })
  }

}
