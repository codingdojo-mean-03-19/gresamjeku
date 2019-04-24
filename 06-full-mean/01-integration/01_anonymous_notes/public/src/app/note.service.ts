import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Note } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly base ='/notes';
  constructor(private readonly http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.base);
  }

  createNote(note: Note): Observable<Note>{
    return this.http.post<Note>(this.base, note);
  }
}
