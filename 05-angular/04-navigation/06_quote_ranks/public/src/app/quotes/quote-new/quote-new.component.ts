import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import { Author, Quote } from '../../models';
import { AuthorService, QuoteService } from '../../services';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  quote = new Author();
 
  @Output()
  createQuote = new EventEmitter<Author>();

  @Input()
  author: Author;
  
  constructor(
    private readonly authorService: AuthorService,
    private readonly quoteService: QuoteService,
    private readonly router: Router, 
    private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('author_id')),
        switchMap(id => this.authorService.getAuthor(id))
      )
      .subscribe(author => {
        this.author = author; 
        console.log('Author:', this.author);
    })
  }

  onSubmit(event:Event, form: NgForm, author_id:String){
    event.preventDefault();
    console.log('Submitting quote', this.quote);
    this.quoteService.createQuote(author_id, this.quote)
    .subscribe(quote => {
      console.log('New quotes', quote);
      this.router.navigateByUrl('/');
    })
    form.reset();
  }
}
