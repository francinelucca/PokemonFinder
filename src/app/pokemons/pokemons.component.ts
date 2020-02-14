import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  currentOffSet= 0;
  limitPerPage= 90;
  hasPrevious: boolean;
  hasNext: boolean;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    let navigated = this.currentOffSet + this.limitPerPage;
    this.hasPrevious = this.currentOffSet > 0;
    this.pokemonService.getPokemons(this.currentOffSet, this.limitPerPage)
      .subscribe(data => {this.pokemons = data["results"];
                          this.hasNext = data["count"] > navigated});
  }

  goToPrevious(): void {
    if(this.hasPrevious){
      this.currentOffSet-=this.limitPerPage;
      this.getPokemons();
    }
  }

  goToNext(): void {
    if(this.hasNext){
      this.currentOffSet+=this.limitPerPage;
      this.getPokemons();
    }
  }

}
