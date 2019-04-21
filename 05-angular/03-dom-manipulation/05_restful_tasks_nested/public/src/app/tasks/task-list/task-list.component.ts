import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../task.service';
import { Task } from '../../models';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Task[] = [];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    })
  }

  onSelect(task: Task){
    console.log('selecting task', task);
    this.selectedTask = this.selectedTask === task ? null : task;  
  }
}
