import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Author } from '../../models';
import { AuthorService, QuoteService } from '../../services';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Author[] = [];

  @Input()
  author:Author;
  
  constructor(
    private authorService: AuthorService,
    private quoteService: QuoteService,
    private readonly route: ActivatedRoute ) { }

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

  onCreate(quote: Author){
    console.log('adding quote', quote);
    this.quoteService.createQuote(this.author._id, quote)
      .subscribe(createdQuote => {
        console.log(createdQuote)
        this.quotes.push(createdQuote);
      })
  }
}
