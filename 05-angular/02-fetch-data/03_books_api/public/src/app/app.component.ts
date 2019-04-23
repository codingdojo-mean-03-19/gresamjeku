import { Component } from '@angular/core';

import { AuthorService } from './author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authorService: AuthorService){}
  
  authors = [];
  books = [];

  ngOnInit(){ 
    this.getAll();
    this.getBooks();
  }
  
  getAll(){
    let observable = this.authorService.getAuthors();
    observable.subscribe(data => {
      console.log('Got our authors!', data);
      this.authors = data['authors'];
    });
  }

  getBooks(){
    let observable = this.authorService.getBooks();
    observable.subscribe(data => {
      console.log('Got our books!', data);
      this.books = data['books'];
    });
  }
}
