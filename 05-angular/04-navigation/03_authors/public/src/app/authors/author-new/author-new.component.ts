import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Author } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author = new Author();
  
  @Output()
  createAuthor = new EventEmitter<Author>();

  constructor() { }

  ngOnInit() { }

  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    
    console.log('Submitting', this.author);
    this.createAuthor.emit(this.author);
    this.author = new Author();
    
    form.reset();
  }

}
