import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '../../models';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit, OnDestroy {
  tasks:Task[] = [];
  selectedTask: Task;
  clicked: boolean = false;
  sub: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log('ng on init');
    const sub = this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks); 
      this.tasks = tasks;
    });
  }

  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.sub.unsubscribe();
  }

  onSelect(task: Task){
    console.log('selecting task', task);
    this.selectedTask = this.selectedTask === task ? null : task;  
  }
 
  onCreate(task:Task){
    console.log('creating book', task);
    this.taskService.createTask(task)
    .subscribe(createdTask => {
      console.log(createdTask)
      this.tasks.push(createdTask);
    })
  }

  onDelete(event: Event, task:Task){
    event.stopPropagation();
    console.log(task._id);
    this.taskService.removeTask(task._id).subscribe(removedTask => {
      console.log('deleting task', removedTask);
      this.tasks = this.tasks.filter(task => task._id !== removedTask._id);
    })
  }

  onEdit(event: Event, task:Task){
    event.stopPropagation();
    
    this.clicked = this.clicked === true ? false : true;

    this.taskService.updateTask(task).subscribe(updateTask => {
      console.log('updated', updateTask);
      //this.tasks = this.tasks.
    })
  }
}
