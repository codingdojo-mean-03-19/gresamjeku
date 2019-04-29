import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Player } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly base = 'http://localhost:8000/api/players';
  constructor(private readonly http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }
  createPlayer(player: Player): Observable<Player>{
    return this.http.post<Player>(this.base, player);
  }
  destroyPlayer(id: String): Observable<Player> {
    return this.http.delete<Player>(`${this.base}/${id}`);
  }
  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.base}/${player._id}`, player);
  }
}
