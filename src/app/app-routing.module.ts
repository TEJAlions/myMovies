import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesModule } from './movies/movies.module';
import { MoviesTheatorsModule } from './movies-theators/movies-theators.module';

const routes: Routes = [
  {path:'movies', loadChildren: () => import('./movies/movies.module').then(m=>m.MoviesModule)},
  // {path:'', redirectTo:'movies',pathMatch:'full'},
  {path:'theators', loadChildren: () => import('./movies-theators/movies-theators.module').then(m=>m.MoviesTheatorsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
