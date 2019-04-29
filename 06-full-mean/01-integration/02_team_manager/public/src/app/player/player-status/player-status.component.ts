import { Component, OnInit } from '@angular/core';

import { Player } from '../../models';
import { PlayerService } from '../../services';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players =>{
      console.log(players);
      this.players = players;
    })
  }

  onPlaying(event:Event, player:Player){
    event.stopPropagation();
    console.log('Playing', player);
    player.status = 'Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {
      console.log("updating player's status", updatedPlayer);      
    })
  }

  onNotPlaying(event:Event, player:Player){
    event.stopPropagation();
    console.log('Not Playing', player);
    player.status = 'Not Playing';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {
      console.log("updating player's status", updatedPlayer);      
    })
  }

  onUndecided(event:Event, player:Player){
    event.stopPropagation();
    console.log('Undecided', player);
    player.status = 'Undecided';
    this.playerService.updatePlayer(player).subscribe(updatedPlayer => {
      console.log("updating player's status", updatedPlayer);      
    })
  }
}
