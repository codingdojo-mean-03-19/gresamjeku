import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Author } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  quote = new Author();
  @Output()
  createQuote = new EventEmitter<Author>();

  constructor() { }

  ngOnInit() { }

  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    
    console.log('Submitting', this.quote);
    this.createQuote.emit(this.quote);
    this.quote = new Author();
    
    form.reset();
  }

}
