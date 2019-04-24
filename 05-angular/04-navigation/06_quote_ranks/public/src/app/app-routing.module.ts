import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromAuthors from './authors';
const routes: Routes = [
  {
    path: '',
    component: fromAuthors.AuthorListComponent
  },
  {
    path: 'authors/new',
    component: fromAuthors.AuthorNewComponent
  },
  {
    path: 'quotes/:author_id',
    component: fromAuthors.QuoteNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
