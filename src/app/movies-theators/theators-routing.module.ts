import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatorsComponent } from './theators.component';

const routes: Routes = [
  {path:'', component: TheatorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheatorsRoutingModule { }
