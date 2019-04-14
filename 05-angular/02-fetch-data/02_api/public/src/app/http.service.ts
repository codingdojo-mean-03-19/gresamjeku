import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
    this.getPokemon();
  }

  getPokemon(){
      let tempObservable = this._http.get<ChlorophyllData>('https://pokeapi.co/api/v2/pokemon/1/');
      tempObservable.subscribe(data => {
          console.log("Got our POKEMON! Chlorophyll has the following abilities:");
          for (const item of data.abilities){
            console.log('Ability:', item.ability.name);
          }
          this.getCount(data.abilities[1].ability.url);
        });
    }

    getCount(url){
      let tempObservable = this._http.get<Count>(url)
      tempObservable.subscribe(data => {
        console.log(data.pokemon.length + " pokemons have the " + data.name.toUpperCase() + " ability.");
      });
    };
}

interface ChlorophyllData { abilities: Array<Ability> }
interface Ability {
  ability: {
    name: string,
    url: string
  }
}
interface Count {
  name: string,
  pokemon: Array<Pokemon>
}

interface Pokemon{ length: number }