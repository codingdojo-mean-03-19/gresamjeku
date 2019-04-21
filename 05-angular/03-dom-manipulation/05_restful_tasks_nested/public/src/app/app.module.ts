import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TaskService } from './task.service';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskShowComponent } from './tasks/task-show/task-show.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
