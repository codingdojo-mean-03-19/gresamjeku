import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {
  player = new Player();

  @Output()
  createPlayer = new EventEmitter<Player>();

  constructor(private readonly playerService: PlayerService, private readonly router: Router) { }

  ngOnInit() { }

  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    console.log('Submitting ', this.player);
    this.playerService.createPlayer(this.player)
      .subscribe(player => {
        console.log('New player ', player);
        this.router.navigateByUrl('/players/list');
      })
  }
}
