import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly base = 'http://localhost:8000/api/authors';
  constructor(private readonly http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.base);
  }

  getAuthor(id: String): Observable<Author>{
    console.log(id);
    return this.http.get<Author>(`${this.base}/${id}`);
  }
  
  createAuthor(Author: Author): Observable<Author>{
    return this.http.post<Author>(this.base, Author);
  }
  
}
