import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiVersion = 2;
  private pokemonsApiBaseUrl = `https://pokeapi.co/api/v${this.apiVersion}/pokemon`;

  constructor(private http: HttpClient) { }

  getPokemons(offset: number = 0, limit: number = 20): Observable<any>{
    const url = `${this.pokemonsApiBaseUrl}?offset=${offset}&limit=${limit}`;
    return this.http.get(url).pipe(
      map(this.extractData)
    )
  }

  getPokemon(id: number): Observable<any>{
    const url = `${this.pokemonsApiBaseUrl}/${id}`;
    return this.http.get(url).pipe(
      map(this.extractData)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
