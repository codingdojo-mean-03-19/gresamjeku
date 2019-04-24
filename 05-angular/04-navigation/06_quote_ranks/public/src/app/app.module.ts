import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromAuthors from './authors';
import { NavComponent } from './nav/nav.component';
import { QuoteNewComponent } from './authors/quote-new/quote-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromAuthors.components,
    NavComponent,
    QuoteNewComponent
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
