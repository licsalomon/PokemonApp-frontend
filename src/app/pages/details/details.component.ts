import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

//Services
import { ApiService } from 'src/app/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public pkn: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;
  private url: string = 'https://pokeapi.co/api/v2/pokemon-species';
  private urlPkn: string = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private service: ApiService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPkn();
  }
  public getPkn(){
    const id = this.actRoute.snapshot.params['id'];
    const pokemon = this.service.apiGetPokemon(`${this.urlPkn}/${id}`);
    const name = this.service.apiGetPokemon(`${this.url}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pkn = res;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    );
  }
}
