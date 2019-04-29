import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  sub: Subscription;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    console.log('ng on init');
    this.sub = this.playerService.getPlayers().subscribe(players => {
      console.log(players);
      this.players = players;
    })
  }
  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.sub.unsubscribe;    
  }

  onCreate(player: Player){
    this.playerService.createPlayer(player)
      .subscribe(createdPlayer =>{
        console.log('Adding new player');
        this.players.push(createdPlayer);
      })
  }

  onDelete(event:Event, player:Player) {
    event.stopPropagation();
    this.playerService.destroyPlayer(player._id)
      .subscribe(destroyedPlayer => {
        console.log('Deleting this player', destroyedPlayer);
        this.players = this.players.filter(player => player._id != destroyedPlayer._id)
      })
  }
}
