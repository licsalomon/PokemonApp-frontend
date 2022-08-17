import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    ListComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
