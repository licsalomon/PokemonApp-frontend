import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
//Module
import { SharedModule } from '../shared/shared.module';
import { RoutingPagesModule } from './routing-pages.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingPagesModule
  ]
})
export class PagesModule { }
