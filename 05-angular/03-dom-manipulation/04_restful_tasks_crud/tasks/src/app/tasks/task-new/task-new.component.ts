import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Task} from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  
  task = new Task();
  
  @Output()
  createTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    
    console.log('Submitting', this.task);
    this.createTask.emit(this.task);
    this.task = new Task();
    
    form.reset();
  }
}
