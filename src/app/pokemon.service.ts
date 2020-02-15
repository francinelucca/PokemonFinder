import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

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
      map(this.extractData),
      tap(_ => this.log('fetched pokemons')),
      catchError(this.handleError<Pokemon[]>('get pokemons',[]))
    )
  }

  getPokemon(id: number): Observable<any>{
    const url = `${this.pokemonsApiBaseUrl}/${id}`;
    return this.http.get(url).pipe(
      map(this.extractData),
      tap(_ => this.log(`fetched pokemon is=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed:${error.message}`);

      return of(result as T);
    }
  }

}
