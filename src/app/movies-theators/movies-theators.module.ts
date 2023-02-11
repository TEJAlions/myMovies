import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatorsComponent } from './theators.component';
import { TheatorsRoutingModule } from './theators-routing.module';



@NgModule({
  declarations: [TheatorsComponent],
  imports: [
    CommonModule,
    TheatorsRoutingModule
  ]
})
export class MoviesTheatorsModule { }
