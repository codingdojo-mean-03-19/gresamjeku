import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromPlayers from './player';
import { NavComponent } from './nav/nav.component';
import { PlayerStatusComponent } from './player/player-status/player-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromPlayers.components,
    NavComponent,
    PlayerStatusComponent
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
