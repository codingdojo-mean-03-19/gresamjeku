import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note = new Note();

  @Output()
  createNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() { }

  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    
    console.log('Submitting', this.note);
    this.createNote.emit(this.note);
    this.note = new Note();
    
    form.reset();
  }
}
