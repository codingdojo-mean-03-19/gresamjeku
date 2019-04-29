import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromPlayers from './player';

const routes: Routes = [
  {
    path:'players/list',
    component: fromPlayers.PlayerListComponent
  },
  {
    path:'players/new',
    component: fromPlayers.PlayerNewComponent
  },
  {
    path:'status/game/1',
    component: fromPlayers.PlayerStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
