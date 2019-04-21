import { Component, OnInit } from '@angular/core';

import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private taskService: TaskService){}
  
  tasks = [];

  ngOnInit(){ this.getAll(); }
  
  getAll(){
    let observable = this.taskService.getTasks();
    observable.subscribe(data => {
      console.log('Gout our tasks!', data);
      this.tasks = data['tasks'];
    });
  }
}
