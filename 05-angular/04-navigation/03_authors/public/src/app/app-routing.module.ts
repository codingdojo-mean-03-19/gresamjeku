import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromAuthors from './authors';

const routes: Routes = [
  {
    path: '',
    component: fromAuthors.AuthorListComponent,
  },
  {
    path: 'authors/new',
    component: fromAuthors.AuthorNewComponent,
  },
  {
    path: 'authors/:author_id',
    component: fromAuthors.AuthorShowComponent,
  },
  {
    path: 'authors/edit/:author_id',
    component: fromAuthors.AuthorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
