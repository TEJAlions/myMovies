import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  source='http://image.tmdb.org/t/p/w154//sv1xJUazXeYqALzczSZ3O6nkH75.jpg'
  constructor(private http:HttpClient) {
    this.http.get('http://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg').subscribe((data:any)=> {
      // this.source = data;
    })
  }
}
