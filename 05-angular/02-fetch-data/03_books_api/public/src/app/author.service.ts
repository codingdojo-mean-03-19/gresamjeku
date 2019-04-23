import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private readonly http: HttpClient) { 
    this.getAuthors();
    this.getBooks();
  }

  
  getAuthors(){
      return this.http.get('/authors');
  }

  getBooks(){
    return this.http.get('/authors/books');
  }
}
