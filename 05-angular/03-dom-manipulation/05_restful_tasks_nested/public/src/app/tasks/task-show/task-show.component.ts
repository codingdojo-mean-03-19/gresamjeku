import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-task-show',
  templateUrl: './task-show.component.html',
  styleUrls: ['./task-show.component.css']
})
export class TaskShowComponent implements OnInit {
  @Input()
  task: Task;

  constructor() { }

  ngOnInit() { }

}
