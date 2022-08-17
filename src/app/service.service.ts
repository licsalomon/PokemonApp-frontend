import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly url: string =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}
  
  apiListAllPokemons() {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap(console.log),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            (response) => (resPokemons.status = response)
          )
        });
      })
    );
  }

  apiGetPokemon(url: string) {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
