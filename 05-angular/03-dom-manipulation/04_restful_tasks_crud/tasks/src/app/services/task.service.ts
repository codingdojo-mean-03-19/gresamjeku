import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly base = '/tasks';
  constructor(private readonly http: HttpClient) { }
  //show all
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.base);
  }
  //show by id (selected)
  getTask(id: number): Observable<Task>{
    console.log(id);
    return this.http.get<Task>(`${this.base}/${id}`);
  }
  //add new
  createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.base, task);
  }
  //delete by id
  removeTask(id: string): Observable<Task> {
    return this.http.delete<Task>(`${this.base}/${id}`);
  }
  //edit
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.base}/${task._id}`, task);
  }
}
