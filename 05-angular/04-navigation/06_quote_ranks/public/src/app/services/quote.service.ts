import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private readonly base = 'http://localhost:8000/api/authors/quotes';
  constructor(private readonly http: HttpClient) { }

  getQuotes(author_id:String): Observable<Author>{
    return this.http.get<Author>(`${this.base}/${author_id}`)
  }

  createQuote(author_id:String, quote:Author): Observable<Author> {
    return this.http.post<Author>(`${this.base}/${author_id}`, quote);
  }
}
