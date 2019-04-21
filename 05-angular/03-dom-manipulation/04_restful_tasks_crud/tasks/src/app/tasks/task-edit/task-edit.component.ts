import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  @Input()
  showMe: boolean;

  constructor() { }

  ngOnInit() { }

}