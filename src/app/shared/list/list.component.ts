import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/service.service';

@Component({
  selector: 'poke-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public page!: number;
  public itemsPerPage!: number;
  public paginationSelect: boolean = false;
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.apiListAllPokemons().subscribe(
      (res: any) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (error: any) => {
        this.apiError = true;
      }
    );
  }

  getFilter(value: any) {
    if (value.qty && value.pagination == 'Pagination') {
      this.setPagination(parseInt(value.qty));
      this.paginationSelect = true;
    } else if (value.pagination == 'Infinite Scroll') {
      this.paginationSelect = false;
    } else if (value.initial && value.final) {
      this.rangeFilter(value);
    }else if (value.qty) {
      this.itemsPerPage = value.qty;
    }

    console.log(value);
  }
  setPagination(pageValue: number) {
    this.itemsPerPage = pageValue;
  }
  rangeFilter(list: any) {
    let init = list.initial;
    let end = list.final;
    const filterInitit = this.setAllPokemons.filter((element: any) => {
      return element.status.id >= init && element.status.id <= end;
    });
    this.getAllPokemons = filterInitit;
  }
  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
