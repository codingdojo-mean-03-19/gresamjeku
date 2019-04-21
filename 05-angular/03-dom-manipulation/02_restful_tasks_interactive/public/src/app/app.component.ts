import { Component, OnInit } from '@angular/core';

import { Task } from './models';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks : Task[] = [];
  
  constructor(private taskService: TaskService) {}
  
  ngOnInit(){ this.taskService.getTasks().subscribe(tasks => {
    console.log(tasks);
    this.tasks = tasks;
    });
  }
}
