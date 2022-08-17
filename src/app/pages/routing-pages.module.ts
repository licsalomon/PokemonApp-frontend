import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingPagesModule {}
