import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesCardComponent } from './movies-card/movies-card.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {path:'', component: MoviesComponent},
  {path:':movieid', component: MoviesCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
