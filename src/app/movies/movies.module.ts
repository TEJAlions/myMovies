import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor } from './movies_interceptor';
import { MoviesComponent } from './movies.component';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    MoviesComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ]
})
export class MoviesModule { }
