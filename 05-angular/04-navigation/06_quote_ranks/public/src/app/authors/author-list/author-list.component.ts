import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Author } from '../../models';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {
  authors: Author[] = [];
  sub: Subscription;
  
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    console.log('ng on init');
    this.sub = this.authorService.getAuthors().subscribe(authors => {
      console.log(authors);
      this.authors = authors;
    })
  }
  
  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.sub.unsubscribe();
  }

  onCreate(author: Author){
    console.log('adding author', author);
    this.authorService.createAuthor(author)
    .subscribe(createdAuthor => {
      console.log(createdAuthor)
      this.authors.push(createdAuthor);
    })
  }
}
