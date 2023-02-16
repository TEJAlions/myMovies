import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor } from './movies_interceptor';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesCardComponent } from './movies-card/movies-card.component';
import { ApiService } from './services/api.service';
import { MaterialModule } from '../material.module';
import { MovieBlockComponent } from './movie-block/movie-block.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MoviesComponent,
    MoviesCardComponent,
    MovieBlockComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    MoviesComponent
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ]
})
export class MoviesModule { }
