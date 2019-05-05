import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromAuthors from './authors';
import * as fromQuotes from './quotes';

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromAuthors.components,
    ...fromQuotes.components,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
